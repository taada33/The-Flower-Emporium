const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const productCartRoutes = require('./cart-routes');
const userRoutes = require('./user-routes')


router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/productCart', productCartRoutes);
router.use('/users', userRoutes)

module.exports = router;