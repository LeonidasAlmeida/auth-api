const User = require("../models/User")
const { resStatus } = require("../utils/statusResponse")
const { registrationValidations } = require("../validations/authValidation")

const createUser = async (req, res) =>{
    try {
        //get data from user
       
      
        const {error, value} = registrationValidations.validate(req.body)
        if(error){return resStatus(res,500,false,'Error to validation user data',error) }
        const finderId = await User.findOne({email:value.email})
        if(finderId){ return resStatus(res,500,false,'Error to validation Email already existe')}

        await User.create(value)
        resStatus(res,200,true,'Sucess to create user')
       
    } catch (error) {
        resStatus(res,500,false,'Error into create a user API')
    }
}

module.exports = { createUser }