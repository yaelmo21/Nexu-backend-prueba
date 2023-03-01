import { Brand, Model } from '../../models';

export const getAllBrands = async () => {
    const brands = await Brand.find({}).lean();
    const result = [];
    for await (const brand of brands) {
        const models = await Model.aggregate([
            { $match: { brand: brand._id } },
            { $group: { _id: '$brand', count: { $sum: '$average_price' } } }
        ]);
        const resultCountModels = models[0] || {};
        const modelsCount = resultCountModels.count && !isNaN(resultCountModels.count) ? resultCountModels.count : 0;
        const count = await Model.countDocuments({ brand: brand._id });
        const average = modelsCount > 0 ? modelsCount / count : 0;
        result.push({
            ...brand,
            average_price: Math.round(average)
        });
    }
    return result;
}
