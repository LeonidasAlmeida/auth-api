const User = require("../models/User")
const bcrypt = require('bcryptjs')
const { resStatus } = require("../utils/statusResponse")
const { registrationValidations } = require("../validations/authValidation")

const createUser = async (req, res) =>{
    try {
        //get data from user
        const {error, value} = registrationValidations.validate(req.body)
        if(error){return resStatus(res,500,false,'Error to validation user data',error) }
        //find email
        const finderId = await User.findOne({email:value.email})
        if(finderId){ return resStatus(res,500,false,'Error to validation Email already existe')}
        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(value.password,salt)
        //create new user
        await User.create({password:hashedPassword,userName:value.userName,email:value.email,userType:value.userType})
        resStatus(res,200,true,'Sucess to create user')
       } catch (error) {
        resStatus(res,500,false,'Error into create a user API')
    }
}

module.exports = { createUser }