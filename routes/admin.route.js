const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/add-admin', async (req, res) => {
    const newAdmin = await Admin.create({
        username: req.body.username,
        password: req.body.password,
    })
    newAdmin.save().then(()=> res.json('New admin registered!!')).catch(err=> res.status(400).json('Error: '+ err));
})

module.exports = router;