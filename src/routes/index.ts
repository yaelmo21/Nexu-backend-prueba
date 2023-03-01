import fb from 'fastify-plugin';
import BrandsRoutes from './brands.routes';
import DatabaseRoutes from './database.routes';


export default fb(async (server) => {
    server.register(BrandsRoutes, { prefix: '/brands' });
    server.register(DatabaseRoutes, { prefix: '/database' });
}, { name: 'Api Routes' });