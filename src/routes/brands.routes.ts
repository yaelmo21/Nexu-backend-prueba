import { FastifyPluginAsync } from 'fastify';
import { NotFoundError, ConflictError } from 'http-errors-enhanced';
import { createBrand, getAllBrands, getModelsByBrandId, isBranInDb } from '../usecases/brands';
import { BrandsSchema } from './schemas';
import { createModel, isModelInDb } from '../usecases/models';



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

    server.post<{ Params: { id: string }, Body: { name: string, average_price?: number } }>('/:id/models', {
        schema: BrandsSchema.createModel
    }, async (request, reply) => {
        const { id } = request.params;
        const { name, average_price } = request.body;
        const brandDb = await isBranInDb(id);
        if (!brandDb) throw new NotFoundError(`No brand found with this id ${id}`);
        const brandId = brandDb._id.toString();
        const modelInDb = await isModelInDb(name, brandId);
        if (modelInDb) throw new ConflictError(`Model ${name} already exists in this brand`);
        const model = await createModel(brandId, name, average_price);
        reply.status(201).send({
            ok: true,
            model
        });
    });
}

export default BrandsRoutes;