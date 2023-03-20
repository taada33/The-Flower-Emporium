const router = require('express').Router();
const { User, Categories, Products, ProductCart } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  let userCart = [];
  if(req.session.logged_in){
    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    userCart = cartData.map((element) => element.get({ plain: true}))
  }
  res.render('homepage', {
    logged_in: req.session.logged_in,
    in_cart: userCart.length || ' ',
  });
});

router.get('/register', (req, res) => {
  res.render('register', {
    logged_in: req.session.logged_in,
  });
});

router.get('/category/:id', async (req, res) => {
  // try {
    let userCart = [];
    if(req.session.logged_in){
      const cartData = await ProductCart.findAll({
        include: { model: Products},
        where: {user_id: req.session.user_id}
      });
      userCart = cartData.map((element) => element.get({ plain: true}))
    }
    const categoryData = await Categories.findByPk(req.params.id, {
      include: [{ model: Products }],
    });
    const categoryProducts = categoryData.products.map((product) => product.get({ plain: true }));
    console.log(categoryProducts);
    res.render('category', { 
      categoryProducts, 
      categoryId: req.params.id,
      logged_in: req.session.logged_in,
      in_cart: userCart.length || ' ',
    })
});

router.get('/product/:id', withAuth, async (req, res) => {
  // try {
    const productData = await Products.findByPk(req.params.id);
    const product = productData.get({ plain: true });

    //check if product is in cart already

    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    let isInCart = false;
    const userCart = cartData.map((element) => element.get({ plain: true}))
    userCart.forEach((cartItem) => {
      if(cartItem.product_id == req.params.id){
        isInCart= true;
      }
    })

    res.render('product', { 
      product, 
      logged_in: req.session.logged_in,
      isInCart,
      in_cart: userCart.length || ' ',
    })
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/about', async (req,res) => {
  let userCart = [];
  if(req.session.logged_in){
    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    userCart = cartData.map((element) => element.get({ plain: true}))
  }
  res.render('about',
  {
    logged_in: req.session.logged_in,
    in_cart: userCart.length || ' ',
  });
})

router.get('/cart', withAuth, async (req, res) => {
  try {
    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    const userCart = cartData.map((element) => element.get({ plain: true}))
    res.render('cart', {
      userCart,
      logged_in: req.session.logged_in,
      in_cart: userCart.length || ' ',
    });
    }
    catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
