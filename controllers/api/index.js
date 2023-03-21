const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const productCartRoutes = require('./cart-routes');
const userRoutes = require('./user-routes')
const checkoutRoute =require('./checkout-route')


router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/productCart', productCartRoutes);
router.use('/users', userRoutes)
router.use('/checkout', checkoutRoute)

module.exports = router;