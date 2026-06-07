const jwt = require("jsonwebtoken")
const blacklistModel = require("../models/blacklistModel")

async function authUser(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Token not Provided"
        })
    }

    const isTokenBlackListed = await blacklistModel.findOne({
       token
    })
    if(isTokenBlackListed){
        return res.status(401).json({
            message:"token is invalid"
        })
    }



    try {
   const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}

module.exports = {authUser}