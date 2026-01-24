const { resStatus } = require("../utils/statusResponse")
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) =>{
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET,(error,decode)=>{
            if(error){
                return resStatus(res,401,false,'Un-Authorize User') 
            }else{
                req.user = decode
                next()
            }
        })
    } catch (error) {
        resStatus(res,500,false,'Error into middleware API',error)
    }
}
module.exports = authMiddleware