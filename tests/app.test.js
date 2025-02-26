const request = require("supertest");
const app = require("../src/index");

test("Deve responder com status 200 na rota /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("🚀 API Rodando com CI/CD!");
});
