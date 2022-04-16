const express = require('express');
const connectDB = require('./cofig/db');
const cors = require("cors");

//creacion de servidor
const app = express()

//Conexion de Base de datos
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/empleado', require('./routes/empleado'));
app.use('/api/producto', require('./routes/producto'));


app.listen(4000, ()=>{
    console.log('El servicor está corriendo en el puerto 4000')
})
