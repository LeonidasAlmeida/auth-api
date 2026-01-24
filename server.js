const express = require('express')
const colors = require('colors')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./src/config/db')
const { errorMiddleware } = require('./src/middlewares/errorMiddleware')

dotenv.config()
//connect to database

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(errorMiddleware)
//routes
app.use('/api/v1/test',require('./src/routes/testeRoutes'))
app.use('/api/v1/user',require('./src/routes/authRoutes'))

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log('Server is Running'.green.bgWhite)
    connectDB() 
})

