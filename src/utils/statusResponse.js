//response ok 
const resStatus = (res,status,success,message,error,data)=>{
    console.log('',error)
    return res.status(status).send({
        success:success,
        message:message,
        data
    })
}
//response error
module.exports = { resStatus }