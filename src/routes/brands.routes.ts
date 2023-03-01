import { FastifyPluginAsync } from 'fastify';
import { NotFoundError } from 'http-errors-enhanced';
import { createBrand, getAllBrands, getModelsByBrandId } from '../usecases/brands';
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

    server.get<{ Params: { id: string } }>('/:id/models', {
        schema: BrandsSchema.getModelsByBrand
    }, async (request, reply) => {
        const { id } = request.params;
        const models = await getModelsByBrandId(id);
        if (models.length === 0) {
            throw new NotFoundError(`No models found for this brand ${id}`);
        }
        reply.status(200).send({
            ok: true,
            models
        });
    });

    server.post<{ Body: { name: string } }>('/', {
        schema: BrandsSchema.createBrand
    }, async (request, reply) => {
        const { name } = request.body;
        const brand = await createBrand(name);
        reply.status(201).send({
            ok: true,
            brand
        });
    });
}

export default BrandsRoutes;