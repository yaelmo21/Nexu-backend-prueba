import { FastifyPluginAsync } from 'fastify';
import { getModels, isModelInDb } from '../usecases/models';
import { NotFoundError } from 'http-errors-enhanced';
import { ModelsSchema } from './schemas';
import { updateModel } from '../usecases/models/updateModel';
const ModelsRoutes: FastifyPluginAsync = async (server) => {
    server.put<{
        Params: { id: string },
        Body: {
            average_price: number
        }
    }>('/:id',
        {
            schema: ModelsSchema.updateModel
        }
        , async (request, reply) => {
            const { id } = request.params;
            const { average_price } = request.body;
            const modelDb = await isModelInDb(id);
            if (!modelDb) throw new NotFoundError(`No model found with this id ${id}`);
            const modelUpdated = await updateModel(modelDb._id.toString(), average_price);
            reply.status(200).send({
                ok: true,
                model: modelUpdated
            });
        });

    server.get<{ Querystring: { greater?: number, lower?: number } }>('/', {
        schema: ModelsSchema.getModels
    }, async (request, reply) => {
        const { greater, lower } = request.query;
        console.log({ greater, lower })
        const models = await getModels(greater, lower);
        reply.status(200).send({
            ok: true,
            models
        });
    });
}

export default ModelsRoutes;