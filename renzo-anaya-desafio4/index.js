const express = require ('express')
const app = express();
const morgan = require("morgan");
const routesDesafio = require('./routesDesafio.js')


app.use(morgan("dev"));
app.use(express.json())


app.use('/api',routesDesafio)



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
} );
