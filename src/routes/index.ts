import fb from 'fastify-plugin';
import BrandsRoutes from './brands.routes';
import DatabaseRoutes from './database.routes';


export default fb(async (server) => {
    server.register(BrandsRoutes, { prefix: '/brands' });
    server.register(DatabaseRoutes, { prefix: '/database' });
    server.get('/', async (req, reply) => {
        reply.send({ message: 'Welcome to the API' });
    });
}, { name: 'Api Routes' });