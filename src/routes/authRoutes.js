const express = require('express')
const { testController } = require('../controllers/testController')
const { createUser } = require('../controllers/authController')
const router = express.Router()

//GET | test route
router.get('/test',testController)
//POST | create user
router.post('/create-user', createUser)
//exports 
module.exports = router