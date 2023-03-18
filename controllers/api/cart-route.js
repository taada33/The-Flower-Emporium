const express = require('express');
const Cart = require('../models/cart');
// const withAuth = require('../utils/auth');
const router = express.Router();


router.get('/carts', async (req, res, next) => {
  try {
    const carts = await Cart.findAll();
    res.json(carts);
  } catch (error) {
    next(error);
  }
});

router.get('/carts/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

module.exports = router;