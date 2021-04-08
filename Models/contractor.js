const mongoose = require('mongoose');

const contractorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        max : 20 
    },
    email: {
        type: String,
        require:true 
    },
    img: {
        type: String,
        require: true 
    },
    phone: {
        type: Number,
        require:true 
    },
    fieldofExperties: {
        type: String,
        require:true
    },
    ratings: {
        type: Number,
    }

})

module.exports = mongoose.model('contractor',  contractorSchema);