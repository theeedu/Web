const request = require("supertest");
const { app, server } = require("../src/index");
const path = require("path");
const fs = require("fs");

afterAll(() => {
    server.close(); 
});

test("Deve responder com status 200 e retornar um arquivo de imagem na rota /", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.headers["content-type"]).toBe("image/jpeg");

    const imagePath = path.join(__dirname, "../assets/img/devops.jpg");
    const expectedImageBuffer = fs.readFileSync(imagePath);

    expect(response.body).toEqual(expectedImageBuffer);
});


