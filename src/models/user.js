//database user schema
const mongoose = require('mongoose')
//Shema
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'User Name is required !']
    },
    email:{
        type:String,
        required:[true,'Email is required !']
    },
    password:{
        type:String,
        required:[true,'Password is required !']
    },
    userType:{
        type:String,
        required:[true,'User Type is required !']
    }
},{timestamps:true})

module.exports = mongoose.model('users',userSchema)