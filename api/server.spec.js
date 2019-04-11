// testing endpoints
// returns correct http status code
const request = require('supertest')
const server = require('./server.js')
describe("server.js", () => {
    it("should check for json", () => {
      return request(server).get('/').expect('Content-Type', /json/) 
    });

    it('should return { api: "up }', () => {
      return request(server).get('/').then(res => {
        expect(res.body).toEqual({ api: "up"})
      })
    })

  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(server).get('/').then(response => {
        expect(response.status).toBe(200)
      })
    });
    it("should respond with 200 OK async", async () => {
      const response = await request(server).get('/')
        expect(response.status).toBe(200)
    });

    it("should respond with 200 OK done", done  => {
       request(server).get('/').then(response => {
         expect(response.status).toBe(200)
         done()
       })
    });

    it("should work", () => {
      return request(server).get('/').expect(200) 
    });

    it('should return JSON', () => {
      return request(server).get('/').then(res => {
        expect(res.type).toBe('application/json')
      })
    })


  });
});
