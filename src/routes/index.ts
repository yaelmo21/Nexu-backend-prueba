import fb from 'fastify-plugin';
import BrandsRoutes from './brands.routes';
import DatabaseRoutes from './database.routes';
import RootRoutes from './root.routes';


export default fb(async (server) => {
    server.register(BrandsRoutes, { prefix: '/brands' });
    server.register(DatabaseRoutes, { prefix: '/database' });
    server.register(RootRoutes);
}, { name: 'Api Routes' });