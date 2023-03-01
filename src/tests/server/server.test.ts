import { build } from '../helpers';

describe('Test in Server', () => {
    const app = build();
    test('should return 200', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/',
        });
        expect(response.statusCode).toBe(200);
    });

    test('should return 404', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/not-found',
        });
        expect(response.statusCode).toBe(404);
    });
});