const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    firstName: { type: String,},
    lastName: { type: String, },
    description: { type: String, },
})

module.exports = mongoose.model('Product', productSchema);