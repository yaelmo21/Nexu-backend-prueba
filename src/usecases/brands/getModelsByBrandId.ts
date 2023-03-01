import { isValidObjectId } from 'mongoose'
import { Brand } from '../../models'

export const getModelsByBrandId = async (brandId: string) => {
    const brand = await Brand.find(isValidObjectId(brandId) ? { _id: brandId } : { brand_name: brandId }, { brand_name: 0 }).lean();
    return brand.map((brand) => ({
        ...brand,
        _id: brand._id.toString()
    }));
}