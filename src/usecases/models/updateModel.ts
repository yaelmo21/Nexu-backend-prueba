import { Model } from '../../models'

export const updateModel = async (modelId: string, average_price: number) => {
    const modelUpdate = await Model.findByIdAndUpdate(modelId, { average_price: average_price }, { new: true }).lean();
    return modelUpdate;
}