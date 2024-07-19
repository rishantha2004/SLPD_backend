const express = require('express');
const router = express.Router();
const Product = require('../models/products');


router.post('/post-product', async (req , res) => {
    const product = await Product.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        description: req.body.description,
    })
    product.save().then(()=> res.json('New User Created!')).catch(err=> res.status(400).json('Error: '+ err));
})

router.get('/get-product', async (req, res) => {
    const product = await Product.find();
    
    if(!product)
        return res.status(404).json({success: false, message: 'No Products'})

    res.status(200).json({success: true, message: 'success', data: {product}})
})
module.exports = router;