import { isValidObjectId } from 'mongoose';
import { Brand } from '../../models';
export const isBranInDb = async (brandId: string) => {
    const brand = await Brand.findOne(isValidObjectId(brandId) ? { _id: brandId } : { name: brandId }, { brand_name: 0 }).lean();
    if (!brand) return false;
    return brand;
}