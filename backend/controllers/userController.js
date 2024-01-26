const UserModel = require('../models/userModel');


exports.getUsers = async (req, res) => {

    try {

        const result = await UserModel.find();

        res.status(200).json({
            status: 'success',
            resultCount: result.length,
            data: {
                result
            },
            message: 'Get all user success!'
        })


    } catch (err) {
        res.status(500).json({
            status: 'Fail!',
            message: 'Get all User Failed!',
            err,
        })
    }


};

exports.getUser = async (req, res) => {

    try {

        
        const result = await UserModel.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            resultCount: result.length,
            data: {
                result
            },
            message: 'Get  user success!'
        })


    } catch (err) {
        res.status(500).json({
            status: 'Fail!',
            message: 'Get  User Failed!',
            err,
        })
    }


};

exports.createUser = async (req, res) => {

    try {
       
        const result = await UserModel.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                result
            },
            message: 'Add user success!'
        })


    } catch (err) {
        res.status(500).json({
            status: 'Fail!',
            message: 'Add User Failed!',
            err: err.message,
        })
    }


}

exports.updateUser = async(req, res)=>{
    try {
       
        const result = await UserModel.findByIdAndUpdate(req.params.id, req.body);

        res.status(201).json({
            status: 'success',
            data: {
                result
            },
            message: 'Update user success!'
        })


    } catch (err) {
        res.status(500).json({
            status: 'Fail!',
            message: 'Update User Failed!',
            err: err.message,
        })
    }
}

exports.deleteUser = async (req, res)=>{
    
    try{

        const result = await UserModel.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status: 'success',
            data: {
                result
            },
            message: 'Delete user success!'
        })

    }catch(err){
        res.status(500).json({
            status: 'Fail!',
            message: 'Delete User Failed!',
            err: err.message,
        })
    }



}