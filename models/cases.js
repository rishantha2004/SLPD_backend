const mongoose = require('mongoose');
const casesSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { 
    type: String, 
    required: true,
    match: [/^\+94\d{9,10}$/, 'Please enter a valid Sri Lankan phone number']
  },
  description: { type: String, required: true },
})

module.exports = mongoose.model('Cases', casesSchema);