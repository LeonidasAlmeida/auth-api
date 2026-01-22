const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database Connected ${mongoose.connection.host}`.white.bgCyan)
    } catch (error) {
       console.log(`Error to conect Database ${mongoose.connection.host}`.white.bgRed,)
    }
}

module.exports = connectDB