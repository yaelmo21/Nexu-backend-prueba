import { isValidObjectId } from 'mongoose'
import { Brand, Model } from '../../models'

export const getModelsByBrandId = async (brandId: string) => {
    const brand = await Brand.findOne(isValidObjectId(brandId) ? { _id: brandId } : { name: brandId }, { brand_name: 0 }).lean();
    if (!brand) throw new Error(`Brand ${brandId} not found`);
    const models = await Model.find({ brand: brand._id }).lean();
    return models;
}