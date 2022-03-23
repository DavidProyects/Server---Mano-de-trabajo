const mongoose = require('mongoose');
require('dotenv').config({ path: "variables.env" });

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            

        })

        console.log('Base de datos conectada');

    } catch (error) {
    
        console.log(error);
        process.exit(1); //detener app en caso de error 
        
    }

}

module.exports = connectDB