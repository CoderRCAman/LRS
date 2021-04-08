const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        max : 20 
    },
    email: {
        type: String,
        require:true 
    },
    password: {
        type: String,
        require:true
    },
    role: {
        type: Boolean,  
    },
    img: {
        type: String,
        require: true 
    }
})

module.exports = mongoose.model('user', userSchema);