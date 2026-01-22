//validations module
const Joi = require('joi')
//user validation
const registrationValidations = Joi.object({
    userName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    userType: Joi.string().required()
})

const emailValidations = Joi.object({
    email: Joi.string().email().required(),
})

const loginValidations = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()

})

module.exports = {registrationValidations,loginValidations,emailValidations}

