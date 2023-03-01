import { Model } from '../../models'

export const isModelInDb = async (name: string, brandId?: string) => {
    const model = await Model.findOne(brandId ? { name, brand: brandId } : { name }).lean();
    if (!model) return false;
    return model;
}