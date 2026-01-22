const { resStatus } = require("../utils/statusResponse")

const testController = async (req, res)=>{
    try {
        resStatus(res,200,true,'Tested with success !')
    } catch (error){
        resStatus(req,500,false,'Error into API test',error)
    }  
}
module.exports = { testController }
