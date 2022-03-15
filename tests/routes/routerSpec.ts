import app from '../../src';
import supertest from 'supertest';
import routes from '../../src/routes/router';

app.use('/', routes);

describe('tests the routes endpoint', () => {
  it('tests index endpoint', () => {
    const request = supertest(routes);
    const response = request.get('/');
    expect(response).not.toBeFalsy();
  });
});
