'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing server',()=>{

    it('testing 404 bad route',async()=>{
        const response = await request.get('/data');
  
        expect(response.status).toEqual(404);
   
    })
    it('testing 404 bad method',async()=>{
        const response = await request.post('/');
      
        expect(response.status).toEqual(404);
    
    })
    it('testing 500 if no name in the query string',async()=>{
        const response = await request.get('/person');
 
        expect(response.status).toEqual(500);
   
    })

    it('test 200 if the name is in the query string', async()=>{
        const response = await request.get('/person?name=osama');
        expect(response.status).toEqual(200)
    })

    it('test query string, output object is correct', async()=>{
        const response = await request.get('/person?name=osama');
        expect(typeof response.body).toEqual('object')
    })

})
