import { DatabaseDummyController } from '../../controllers';
import { Brand, Model } from '../../models';
import { deleteAllData } from './';
export const createData = async () => {
    await deleteAllData();
    const data = DatabaseDummyController.getAllData();
    const brands = data.map(({ brand_name }) => brand_name);
    const brandsUnique = [...new Set(brands)];
    const brandsCreated = await Brand.insertMany(brandsUnique.map(name => ({ name })));
    const modelsInsert = [];
    for (const brand of brandsCreated) {
        const models = data.filter(({ brand_name }) => brand_name === brand.name);
        const modelsSave = models.map(({ name, average_price }) => ({ name, average_price, brand: brand._id }));
        modelsInsert.push(...modelsSave);
    }
    await Model.insertMany(modelsInsert);
    const response = [];
    for await (const brand of brandsCreated) {
        const models = await Model.find({ brand: brand._id }, { brand: 0 }).lean();
        const result = {
            ...brand.toJSON(),
            models
        };
        response.push(result);
    }
    return response;
}