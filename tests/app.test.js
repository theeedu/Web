const request = require("supertest");
const app = require("../src/index");
const path = require("path");
const fs = require("fs");

test("Deve responder com status 200 e retornar um arquivo de imagem na rota /", async () => {
    const response = await request(app).get("/");

    // Verifica se o status HTTP é 200
    expect(response.statusCode).toBe(200);

    // Verifica se o tipo de conteúdo é imagem (jpeg no caso da devops.jpg)
    expect(response.headers["content-type"]).toBe("image/jpeg");

    // Verifica se o buffer retornado pela API é igual ao arquivo original
    const imagePath = path.join(__dirname, "../assets/img/devops.jpg");
    const expectedImageBuffer = fs.readFileSync(imagePath);

    expect(response.body).toEqual(expectedImageBuffer);
});

