const { Router } = require("express");
const router = Router();

const productos = [
    {"id":1, "nombre":"Escuadra", "precio":323.45},
    {"id":2, "nombre":"Calculadora", "precio":234.56},
    {"id":3, "nombre":"Globo Terraqueo", "precio":45.67},
    {"id":4, "nombre":"Paleta Pintura", "precio":456.78},
    {"id":5, "nombre":"Reloj", "precio":67.89},
    {"id":6, "nombre":"Agenda", "precio":78.90},
    ]


router.get('/productos', (req,res)=>{
    res.json({productos})
    
});

router.get('/productos/:id',(req,res)=>{

    const {id} = req.params

    let dataId = productos.find(el => el.id === Number(id));

    res.json({dataId})

});

router.post('/productos',(req,res)=>{
    const{producto} = req.body
    let nuevoId = productos.length + 1 
    producto.id = nuevoId
    productos.push(producto)
    res.json({producto})

});



router.put('/productos/:id',(req,res)=>{
    const{id} = req.params
    const{producto} = req.body
    let dataIndice = productos.findIndex(el => el.id === Number(id));
    productos[dataIndice].nombre = producto.nombre
    productos[dataIndice].precio = producto.precio

    res.json({productos})
});

router.delete('/productos/:id',(req,res)=>{
    const{id} = req.params;
    let dataIndice = productos.findIndex(el => el.id === Number(id));
    const productoEliminado = productos.splice(dataIndice,1);

    res.json({"Producto eliminado": productoEliminado, "Productos" : productos});    
});




module.exports = router