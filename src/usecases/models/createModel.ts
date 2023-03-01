import { Model } from '../../models';

export const createModel = async (brandId: string, name: string, average_price?: number) => {
    const model = new Model({
        name,
        brand: brandId,
        average_price
    });
    await model.save();
    return model;
}   