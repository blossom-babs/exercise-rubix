import app from "../../src";
import supertest from 'supertest'
import routes from "../../src/routes/router";

app.use('/', routes)

describe('tests the routes endpoint', ()=>{
  it('expects that the routes api functions as it should',  async () => {
    const request = supertest(routes)
    const response =  await request.get('/')
    expect(response).not.toBeFalsy()
  })
})