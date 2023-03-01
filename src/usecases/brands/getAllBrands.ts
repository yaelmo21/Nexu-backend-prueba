import { Brand, Model } from '../../models';

export const getAllBrands = async () => {
    const brands = await Brand.find({}).lean();
    const result = [];
    for await (const brand of brands) {
        const models = await Model.aggregate([
            { $match: { brand: brand._id } },
            { $group: { _id: '$brand', count: { $sum: '$average_price' } } }
        ]);
        const count = await Model.countDocuments({ brand: brand._id });
        const average = models[0].count / count;
        result.push({
            ...brand,
            average_price: Math.round(average)
        });
    }
    return result;
}
