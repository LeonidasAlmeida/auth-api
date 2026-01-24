const errorMiddleware = (error,req,res,next)=>{
     resStatus(res,500,false,'Error in global API',error)
}
module.exports = { errorMiddleware }