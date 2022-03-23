const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    identificacion: {
        type: String,
        require: true,
    },
    correo: {
        type: String,
        require: true,
    },
    telefono: {
        type: String,
        require: true,
    },
    pasword: {
        type: String,
        require: true
    },
    resumenperfil: {
        type: String,
        require: true
    },
    FechaCreacion: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('usuario1', EmpleadoSchema);