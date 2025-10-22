import { calculateDiscount } from '../src/utils.js';
import request from 'supertest';
import app from '../src/app.js';

describe('app', () => {
    it('should return discount', () => {
        const discount = calculateDiscount(100, 10);
        expect(discount).toBe(10);
    });

    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
