import { connectDb, disconnectDb } from '../../../database'
import { Brand } from '../../../models';
import { createBrand, getModelsByBrandId } from '../../../usecases/brands';

describe('Test in getModelsByBrandId', () => {

    test('should find brand', async () => {
        await connectDb();
        const name = 'test-' + new Date().getTime().toString();
        const brand = await createBrand(name);
        const models = await getModelsByBrandId(brand.name);
        expect(models.length).toBe(0);
        await Brand.findByIdAndDelete(brand._id);
        await disconnectDb();
    });

    test('should not find brand', async () => {
        await connectDb();
        const name = new Date().getTime().toString();
        const models = getModelsByBrandId(name);
        await expect(models).rejects.toThrow(`Brand ${name} not found`);
        await disconnectDb();
    });
})