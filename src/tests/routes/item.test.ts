import app from "../../app";
import request from "supertest";

describe("Item GET /", () => {
 
  test("should return status 200", async () => {
    const response = await request(app).get('/item').send();
    expect(response.statusCode).toBe(200);
  }, 10000);

  test("body should return \"ok\" true", async () => {
    const response = await request(app).get('/item').send();
    const bodyParsed = JSON.parse(response.text);
    expect(bodyParsed).toHaveProperty("ok", true);
  }, 10000);

});

describe('Item POST /', () => {

  test('should return status 201', async() => {
    const data = {
      make: "Chevrolet",
      model: "Spark",
      serial_numer: 990123,
      year: 1986,
      price: 2100.82
  }
    const response = await request(app).post('/item').send(data);
    const bodyParsed = JSON.parse(response.text)
    
    expect(response.statusCode).toBe(201);
    expect(bodyParsed.data._id).toBeDefined()
  })

  // should return application/json in headers

  // should return a item id in the body response
  
})

