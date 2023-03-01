import { FilterQuery } from 'mongoose';
import { IModel, Model } from '../../models';

export const getModels = async (greater?: number, lower?: number) => {
    const filter: FilterQuery<IModel> = {};
    if (greater || lower) filter.average_price = {};
    if (greater) filter.average_price.$gt = greater;
    if (lower) filter.average_price.$lt = lower;
    const models = await Model.find(filter).lean();
    return models;
}