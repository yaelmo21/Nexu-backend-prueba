import { Model } from '../../models';
import { isModelInDb } from './isModelInDb';

export const createModel = async (brandId: string, name: string, average_price?: number) => {
    if (average_price) {
        if (isNaN(average_price)) throw new Error('Average price must be a number');
        if (average_price < 10000) throw new Error('Average price must be greater than 100000');
    }
    const modelDb = await isModelInDb(name, brandId);
    if (modelDb) throw new Error(`Model ${name} already exists`);
    const model = new Model({
        name,
        brand: brandId,
        average_price
    });
    await model.save();
    return model;
}   