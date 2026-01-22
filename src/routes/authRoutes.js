const express = require('express')
const { testController } = require('../controllers/testController')
const { createUserController, loginUserController } = require('../controllers/authController')
const router = express.Router()

//GET | test route
router.get('/test',testController)
//POST | create user
router.post('/create-user', createUserController )
//POST | LOGIN
router.post('/user-login', loginUserController)
//exports 

module.exports = router