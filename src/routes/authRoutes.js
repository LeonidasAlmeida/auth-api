const express = require('express')
const { testController } = require('../controllers/testController')
const { createUserController, loginUserController, getUserController } = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const router = express.Router()

//GET | test route
router.get('/test',testController)
//POST | create user
router.post('/create-user', createUserController )
//POST | LOGIN
router.post('/user-login', loginUserController)
//exports 
router.get('/get-user/:id', authMiddleware, roleMiddleware, getUserController)

module.exports = router