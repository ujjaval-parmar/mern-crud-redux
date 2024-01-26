const mongoose = require('mongoose');


const UserSchema =  new mongoose.Schema({
    name:{
        type: String
    },

    email:{
        type: String
    },

    age:{
        type: Number
    },

    action:{
        type: String
    }
});

module.exports = mongoose.model('user', UserSchema);