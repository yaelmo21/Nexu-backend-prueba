import { connectDb, disconnectDb } from '../../../database/db';
import { getAllBrands } from '../../../usecases/brands';
describe('Test in getallBrands', () => {
    test('should return 200', async () => {
        await connectDb();
        const brands = await getAllBrands();
        await disconnectDb();
        expect(brands.length).toBeGreaterThan(0);
    });
});