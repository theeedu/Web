const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const imagePath = path.join(__dirname, "../assets/img/devops.jpg");
    res.sendFile(imagePath);
});

const server = app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = { app, server };
