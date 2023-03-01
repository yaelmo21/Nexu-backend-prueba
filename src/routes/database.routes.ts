import { FastifyPluginAsync } from 'fastify';
import { UnauthorizedError } from 'http-errors-enhanced'
import { NODE_ENV } from '../environment';
import { createData } from '../usecases/databaseDummy';


const DatabaseRoutes: FastifyPluginAsync = async (server) => {
    server.put('/', async (request, reply) => {
        if (NODE_ENV === 'production') {
            throw new UnauthorizedError('You are not authorized to perform this action');
        }
        const brandsDb = await createData();
        reply.status(201).send(brandsDb);
    });
}

export default DatabaseRoutes;