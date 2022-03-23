const res = require("express/lib/response");
const Producto1 = require ("../models/Producto");


exports.crearProducto = async (req, res) => {

    
    try {
        let producto;

        producto = new Producto1(req.body);

         await producto.save();
         res.send(producto);
         console.log(req);
         console.log('Producto creado exitosamente');

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async (req,res) => {

    try {
        
        const producto = await Producto1.find();
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.modificarProducto = async (req,res) => {

    try {
        
        const { 
            categoria, 
            descripcion, 
            Ubicacion,
            disponibilidad, 
            tiempodeservico,
        } = req.body;
        let buscarproductoE = await Producto1.findById(req.params.id);

        if(!buscarproductoE) {
            res.status(404).json( {msg: 'Este producto no existe'});
        }

        buscarproductoE.categoria = categoria;
        buscarproductoE.descripcion = descripcion;
        buscarproductoE.Ubicacion = Ubicacion;
        buscarproductoE.disponibilidad = disponibilidad;

        buscarproductoE =  await Producto1.findByIdAndUpdate({ _id: req.params.id}, buscarproductoE, {new: true})
        res.json(buscarproductoE);
        console.log('Producto actualizado');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.obtener1Producto = async (req,res) => {

    try {

        if(!buscarproductoE) {
            res.status(404).json( {msg: 'Este producto no existe'});
        }
        
        const producto = await Producto1.findOne();
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.eliminarProducto = async (req,res) => {

    try {

        let producto = await Producto1.findById(req.params.id);

        if(!producto) {
            res.status(404).json( {msg: 'Este producto no existe'});
        }
        
        await Producto1.findOneAndRemove({_id: req.params.id})
        res.json([{msg: 'Producto Eliminado correctamente'}]);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}