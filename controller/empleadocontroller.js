const res = require("express/lib/response");
const usuario1 = require ("../models/Empleado");


exports.crearusuario = async (req, res) => {

    
    try {
        let usuario;

        usuario = new usuario1(req.body);

         await usuario.save();
         res.send(usuario);
         console.log('Usuario ha sido creado exitosamente')

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerusuario = async (req,res) => {

    try {
        
        const usuario = await usuario1.find();
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.modificarusuario = async (req,res) => {

    try {
        
        const { 
            nombre, 
            identificacion, 
            correo,
            telefono, 
            pasword,
            resumenperfil,   
        } = req.body;
        let buscarusuarioE = await usuario1.findById(req.params.id);

        if(!buscarusuarioE) {
            res.status(404).json( {msg: 'Este usuario no existe'});
        }

        buscarusuarioE.nombre = nombre;
        buscarusuarioE.identificacion = identificacion;
        buscarusuarioE.correo = correo;
        buscarusuarioE.telefono = telefono;
        buscarusuarioE.pasword = pasword; 
        buscarusuarioE.resumenperfil = resumenperfil;

        buscarusuarioE =  await usuario1.findByIdAndUpdate({ _id: req.params.id}, buscarusuarioE, {new: true})
        res.json(buscarusuarioE);
        console.log('Usuario actualizado');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.obtenerusuarioE = async (req,res) => {

    try {

        if(!obtenerusuarioE) {
            res.status(404).json( {msg: 'Este usuario no existe'});
        }
        
        const usuario = await usuario1.findOne();
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}

exports.eliminarusuario = async (req,res) => {

    try {

        let usuario = await usuario1.findById(req.params.id);

        if(!usuario) {
            res.status(404).json( {msg: 'Este usuario no existe'});
        }
        
        await usuario1.findOneAndRemove({_id: req.params.id})
        res.json([{msg: 'Usuario eliminado correctamente'}]);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');   
    }
}