const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/login-web', async (req, res) => {
    const {firstName, password} = req.body;

    const adminusername = await Admin.findOne({firstName: firstName})
    const adminuserpassword = await Admin.findOne({password: password})
    if (!adminusername && !adminuserpassword)
        return res.status(404).json({success: false, message: 'Invaild User Login!'});
    res.status(200).json({success: true, message: 'Login Successful!'})
})

module.exports = router;