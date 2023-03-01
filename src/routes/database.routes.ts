import { FastifyPluginAsync } from 'fastify';
import { UnauthorizedError } from 'http-errors-enhanced';
import { NODE_ENV } from '../environment';
import { createData } from '../usecases/databaseDummy';
import { DatabaseSchema } from './schemas';


const DatabaseRoutes: FastifyPluginAsync = async (server) => {
    server.post('/', {
        schema: DatabaseSchema.updateDataDummySchema
    }, async (request, reply) => {
        if (NODE_ENV === 'production') {
            throw new UnauthorizedError('You are not authorized to perform this action');
        }
        const data = await createData();
        reply.status(201).send({
            ok: true,
            data,
        });
    });
}

export default DatabaseRoutes;