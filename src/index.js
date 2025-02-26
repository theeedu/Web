const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const imagePath = path.join(__dirname, "../assets/img/devops.jpg");
    res.sendFile(imagePath);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
