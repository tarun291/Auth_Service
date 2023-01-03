const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const respond = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            message: "Successfully created a new user",
            data: respond,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            sucess: false,
            err: error
        })
    }
}

const sigin=async (req,res)=>{
    try {
        const response=await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            sucess:true,
            data:response,
            err:{},
            message:"Successfully signin"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            sucess: false,
            err: error
        })
    }
}

const isAuthenticated=async (req,res)=>{
    try {
        const token=req.headers['x-access-token'];
        // const isVarified=userService.veryfyToken(token);
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            err:{},
            data:response,
            message:"User is authenticated and token is valid"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })
    }
}

const isAdmin=async(req,res)=>{
    try {
        const responce=await userService.isAdmin(req.body.userId);
        return res.status(200).json({
            data:responce,
            err:{},
            success:true,
            message:"Successfully fetched weather user is admin or not"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })   
    }
}
const isCustomer=async(req,res)=>{
    try {
        const responce=await userService.isCustomer(req.body.userId);
        return res.status(200).json({
            data:responce,
            err:{},
            success:true,
            message:"Successfully fetched weather user is Customer or not"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            err: error
        })   
    }
}

module.exports={
    create,
    sigin,
    isAuthenticated,
    isAdmin,
    isCustomer
}