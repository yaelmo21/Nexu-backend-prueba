import { Brand } from '../../models';

export const getAllBrands = async () => {
    const brands = await Brand.find({}).lean();
    return brands.map((brand) => ({
        ...brand,
        _id: brand._id.toString()
    }));
}
