
let testeo = new Contenedor ('./productos.txt')
import { Contenedor } from "./archivo.js";

const http = require('http')
const express = require ('express')

const app = express()

const PORT = 8080
app.listen(8080)
console.log(`Servidor Http escuchando en el puerto ${PORT}`)

app.get('/productos',(req,res)=>{
    res.send( getall())
})

app.get('/productosRandom',(req,res)=>{
    res.send( getByRandomId())
})



