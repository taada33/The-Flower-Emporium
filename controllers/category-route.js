const express = require('express');
const router = express.Router();

// Make sure the import statement points to the correct file
const { Categories } = require('../models');  

// Route for getting all products    
router.get('/categories', async (req, res) => {
  try {
    // Make sure the Products object is defined
    const product = await Categories.findAll();

    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});   

module.exports = router;