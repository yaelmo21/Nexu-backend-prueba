import { FastifyPluginAsync } from 'fastify';
import { UnauthorizedError } from 'http-errors-enhanced'
import { NODE_ENV } from '../environment';
import { createData } from '../usecases/databaseDummy';
import { DatabaseSchema } from './schemas';


const DatabaseRoutes: FastifyPluginAsync = async (server) => {
    server.put('/', {
        schema: DatabaseSchema.updateDataDummySchema
    }, async (request, reply) => {
        if (NODE_ENV === 'production') {
            throw new UnauthorizedError('You are not authorized to perform this action');
        }
        const brandsDb = await createData();
        console.log(brandsDb)
        reply.status(201).send({
            ok: true,
            brands: brandsDb
        });
    });
}

export default DatabaseRoutes;