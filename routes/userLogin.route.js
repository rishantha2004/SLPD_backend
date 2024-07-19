const express = require('express');
const router = express.Router();
const Register = require('../models/register');

router.post('/', async (req, res) => {
    const { firstName, password } = req.body;

    if (!firstName || !password) {
        return res.status(400).json({ success: false, message: 'First name and password are required' });
    }

    try {
        // Log the input values
        console.log('First Name:', firstName);
        console.log('Password:', password);

        const user = await Register.findOne({ firstName: firstName, password: password});

        if (!user) {
            return res.status(404).json({ success: false, message: 'Invalid User Login!' });
        }

        res.status(200).json({ success: true, message: 'Login Successful!', data: { _id: user._id } });
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
});

module.exports = router;
