const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
    
    },
    lastName: {
        type: String,
       
    },
    password: {
        type: String,
       
    }
})

module.exports = mongoose.model('Register', registerSchema);