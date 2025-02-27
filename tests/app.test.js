const request = require("supertest");
const app = require("../src/index");
const path = require("path");
const fs = require("fs");

let server;

beforeAll((done) => {
    server = app.listen(3000, () => {
        console.log("Servidor de teste rodando...");
        done(); 
    });
});

afterAll(() => {
    server.close();
});

test("Deve responder com status 200 e retornar um arquivo de imagem na rota /", async () => {
    const response = await request(app).get("/");

    console.log("Status recebido:", response.statusCode);
    console.log("Content-Type recebido:", response.headers["content-type"]);

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/image\/jpeg|image\/jpg/);

    const imagePath = path.join(__dirname, "../public/img/devops.jpg");
    const expectedImageBuffer = fs.readFileSync(imagePath);

    expect(response.body).toEqual(expectedImageBuffer);
});
