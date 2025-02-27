const express = require("express");
const path = require("path");

const app = express();

// Servindo imagem na rota "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/img/devops.jpg"));
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}

module.exports = app;
