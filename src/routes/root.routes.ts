import { FastifyPluginAsync } from 'fastify';
import { RootSchemas } from './schemas';


const RootRoutes: FastifyPluginAsync = async (server) => {
    server.get('/', {
        schema: RootSchemas.rootSchema
    }, (req, reply) => {
        reply.send({ message: 'Welcome to the API' });
    });
}

export default RootRoutes;