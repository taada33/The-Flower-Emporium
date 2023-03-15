const express = require('express');
const product = require('../models/product');
const withAuth = require('../utils/auth');


const router = express.Router();



router.get('/products',withAuth, async (req, res, next) => {
  try {
    const product = await product.findAll();
    res.json(products);
  } catch (error) {
    next(error);``
  }
});


module.exports = router;