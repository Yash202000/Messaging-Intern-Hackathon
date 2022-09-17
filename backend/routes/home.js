const router = require('express').Router()
const jwt = require('jsonwebtoken')


router.route('/').post((req,res)=>{
    
    try{
        var decodeToken = jwt.verify(req.headers.authorization,process.env.TOKEN_SECRET)
        username = decodeToken.username;

    }catch(err){
        res.send({
            error : true,
            data: [],
            message : "Invalid token"
        })
        return
    }

    console.log(username)
    res.status(201).json('success')
    
})


module.exports = router