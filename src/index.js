const express = require("express");
const path = require("path");

const app = express();


app.use("/img", express.static(path.join(__dirname, "../public/img")));


app.get("/", (req, res) => {
    const imagePath = path.join(__dirname, "../public/img/devops.jpg");
    console.log("Tentando servir a imagem:", imagePath);
    
    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error("Erro ao enviar a imagem:", err);
            res.status(404).send("Imagem não encontrada");
        }
    });
});


module.exports = app;
