import { ConflictError } from 'http-errors-enhanced';
import { Brand } from '../../models'

export const createBrand = async (name: string) => {
    const isBrandInDb = await Brand.find({ name }).countDocuments();
    if (isBrandInDb) {
        throw new ConflictError(`Brand ${name} already exists`);
    }
    const brand = await Brand.create({ name });
    return {
        ...brand.toJSON(),
        _id: brand._id.toString()
    }
}