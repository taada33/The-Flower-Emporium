const express = require('express');
const prod = require('../models/product');
const withAuth = require('../utils/auth');


const router = express.Router();



router.get('/products',withAuth, async (req, res, next) => {
  try {
    const prod = await product.findAll();
    res.json(products);
  } catch (error) {
    next(error);``
  }
});


module.exports = router;