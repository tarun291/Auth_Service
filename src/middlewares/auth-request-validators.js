const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:'Something went wrong',
            err:"Email or password missing int the signup request"
        })
    }
    next();
}
module.exports={
    validateUserAuth
}