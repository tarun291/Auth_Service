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

module.exports={
    create
}