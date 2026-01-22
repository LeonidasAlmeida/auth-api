const express = require('express')
const { testController } = require('../controllers/testController')
const router = express.Router()

//GET | test route
router.get('/test', testController)
//exports 
module.exports = router