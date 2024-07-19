const express = require('express');
const router = express.Router();
const Regitser = require('../models/register');


router.post('/', async (req, res) => {
    const register = await Regitser.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })
    register.save().then(()=> res.json('New Member Registered!!')).catch(err=> res.status(400).json('Error: '+ err));
})

router.get('/:id', async (req, res) => {
    const userData = await Regitser.findById(req.params.id);

    if(!userData)
        return res.status(404).json({success: false, message: 'Invaild User!'})

    res.status(200).json({success: true, messgae: 'success!', data: {userData}})

})

module.exports = router;