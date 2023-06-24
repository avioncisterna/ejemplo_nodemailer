const express = require("express");
const { enviar } = require("./index.js");
const app = express();
const PORT = 3090;

app.get("/envio_correo", (req, res) => {
    enviar();
    res.status(200).send("Correo enviado.")
})
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))