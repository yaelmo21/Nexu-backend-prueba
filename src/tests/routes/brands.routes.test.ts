import { build } from '../helpers';
import { connectDb, disconnectDb } from '../../database/db';
import { Brand } from '../../models';

describe('Test in Brands routes', () => {
    const app = build();
    test('Get all Brands', async () => {
        await connectDb();
        const count = await Brand.find().countDocuments();
        const response = await app.inject({
            method: 'GET',
            url: '/brands',
        });
        await disconnectDb();
        const body = response.json();
        const brandsResponse = body.brands;
        expect(response.statusCode).toBe(200);
        expect(brandsResponse.length).toBe(count);
    });
});