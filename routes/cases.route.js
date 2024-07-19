const express = require('express');
const router = express.Router();
const Cases = require('../models/cases');

router.post('/add-cases', async (req, res) => {
    try {
      const newCase = await Cases.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
      });
      newCase.save().then(()=> res.json('New Case Added!')).catch(err=> res.status(400).json('Error: '+ err));
    } catch (err) {
      console.error('Error adding case:', err);
      res.status(400).json('Error: ' + err.message);
    }
  });
  

router.get('/get-cases', async (req, res) => {
    const cases = await Cases.find();
    
    if(!cases)
        return res.status(404).json({success: false, message: 'No Products'})

    res.status(200).json({success: true, message: 'success', data: {cases}})
})


router.delete('/delete-cases/:id', async (req, res)=>{
    try {
      
        const cases = await Cases.findByIdAndDelete(req.params.id);
        if (!cases) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }
        res.status(200).json({
            
            data: null
        });
    } catch (err) {
        res.status(500).json({
           
            message: err.message
        });
    }
})

module.exports = router;