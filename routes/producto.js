// rutas para producto
const express = require("express");
const router = express.Router();
const productoContoroller = require('../controller/productocontroller');


//api/productos
router.post('/', productoContoroller.crearProducto);
router.get('/', productoContoroller.obtenerProducto);
router.put('/:id', productoContoroller.modificarProducto);
router.get('/:id', productoContoroller.obtener1Producto);
router.delete('/:id', productoContoroller.eliminarProducto);


module.exports = router;