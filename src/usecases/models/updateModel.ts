import { Model } from '../../models'

export const updateModel = async (modelId: string, average_price: number) => {
    if (isNaN(average_price)) throw new Error('Average price must be a number');
    if (average_price < 10000) throw new Error('Average price must be greater than 100000');
    const modelUpdate = await Model.findByIdAndUpdate(modelId, { average_price: average_price }, { new: true }).lean();
    return modelUpdate;
}