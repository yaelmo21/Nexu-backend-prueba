import { FastifyPluginAsync } from 'fastify';
import { getAllBrands } from '../usecases/brands';


const BrandsRoutes: FastifyPluginAsync = async (server) => {
    server.get('/', async (request, reply) => {
        return getAllBrands();
    });
}

export default BrandsRoutes;