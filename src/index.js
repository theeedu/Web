const express = require("express");
const path = require("path");

const app = express();

// Rota para servir a imagem
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/img/devops.jpg"));
});


// Exportando o handler para Vercel (sem `app.listen()`)
module.exports = app;

