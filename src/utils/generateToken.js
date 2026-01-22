const jwt = require('jsonwebtoken')

const tokenGenerate = (id)=>{
    const token = jwt.sign({id :id},process.env.JWT_SECRET,{expiresIn:'1h'})
    return token
}

module.exports = { tokenGenerate }