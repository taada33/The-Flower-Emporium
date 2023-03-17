const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const productCartRoutes = require('./productCart-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/productCart', productCartRoutes);

module.exports = router;