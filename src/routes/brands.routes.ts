import { FastifyPluginAsync } from 'fastify';
import { getAllBrands } from '../usecases/brands';
import { BrandsSchema } from './schemas';


const BrandsRoutes: FastifyPluginAsync = async (server) => {
    server.get('/', {
        schema: BrandsSchema.getAllBrandsSchema
    }, async (request, reply) => {
        const brands = await getAllBrands();
        reply.status(200).send({
            ok: true,
            brands
        });
    });
}

export default BrandsRoutes;