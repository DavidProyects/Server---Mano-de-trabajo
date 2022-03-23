// rutas para producto
const express = require("express");
const router = express.Router();
const productoContoroller = require('../controller/empleadocontroller');


//api/productos
router.post('/', productoContoroller.crearusuario);
router.get('/', productoContoroller.obtenerusuario);
router.put('/:id', productoContoroller.modificarusuario);
router.get('/:id', productoContoroller.obtenerusuarioE);
router.delete('/:id', productoContoroller.eliminarusuario);


module.exports = router;