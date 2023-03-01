import { connectDb, disconnectDb } from '../../../database/db';
import { Brand } from '../../../models';

import { createBrand } from '../../../usecases/brands';
describe('Test in createBrand', () => {
    test('create a brand', async () => {
        await connectDb();
        const name = 'test-' + new Date().getTime().toString();
        const brand = await createBrand(name);
        expect(brand.name).toBe(name);
        await Brand.findByIdAndDelete(brand._id);
        await disconnectDb();
    });

    test('create a brand with same name', async () => {
        const name = 'test-' + new Date().getTime().toString();
        await connectDb();
        const brandOne = await createBrand(name);
        const brandTwo = createBrand(name);
        await expect(brandTwo).rejects.toThrow(`Brand ${name} already exists`);
        await Brand.findByIdAndDelete(brandOne._id);
        await disconnectDb();
    });
})