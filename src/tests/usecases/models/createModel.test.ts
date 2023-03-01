import { connectDb, disconnectDb } from '../../../database/db';
import { createModel } from '../../../usecases/models';
import { createBrand } from '../../../usecases/brands';
import { Brand, Model } from '../../../models';
describe('Test in createModel', () => {
    test('should create model', async () => {
        await connectDb();
        const name = 'test-' + new Date().getTime().toString();
        const brand = await createBrand(name);
        const model = await createModel(brand._id.toString(), name);
        expect(model.name).toBe(name);
        await Brand.findByIdAndDelete(brand._id);
        await Model.findByIdAndDelete(model._id);
        await disconnectDb();
    });

    test('should not create model', async () => {
        await connectDb();
        const name = 'test-' + new Date().getTime().toString();
        const brand = await createBrand(name);
        const modelOne = await createModel(brand._id.toString(), name);
        const modelTwo = createModel(brand._id.toString(), name);
        await expect(modelTwo).rejects.toThrow(`Model ${name} already exists`);
        await Brand.findByIdAndDelete(brand._id);
        await Model.findByIdAndDelete(modelOne._id);
        await disconnectDb();
    });
})