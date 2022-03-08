import supertest from 'supertest';
import app from '../index';

describe('tests endpoints', () => {
  it('expects the get endpoint to work', async () => {
    const request = supertest(app);
    const response = await request.get('/');
    expect(response).not.toBeFalsy();
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello world');
  });
});
