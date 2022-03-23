const { type, attachment } = require('express/lib/response');
const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    categoria:{
        type: String,
        requier: true
    },
    descripcion: {
        type: String,
        require: true
    },
    Ubicacion: {
        type: String,
        require: true
    },
    disponibilidad: {
        type: String,
        require: true
    },
    FechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Producto1', ProductoSchema);