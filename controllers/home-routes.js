const router = require('express').Router();
const { User, Categories, Products, ProductCart } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });`
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in,
  });
});

router.get('/category/:id', async (req, res) => {
  // try {
    const categoryData = await Categories.findByPk(req.params.id, {
      include: [{ model: Products }],
    });
    const categoryProducts = categoryData.products.map((product) => product.get({ plain: true }));
    console.log(categoryProducts);
    res.render('category', { 
      categoryProducts, 
      categoryId: req.params.id,
      logged_in: req.session.logged_in,
    })
});

router.get('/product/:id', async (req, res) => {
  // try {
    const productData = await Products.findByPk(req.params.id);
    const product = productData.get({ plain: true });
    console.log(product);
    res.render('product', { 
      product, 
      logged_in: req.session.logged_in,
    })
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/about', (req,res) => {
  res.render('about');
})

router.get('/cart', async (req, res) => {
  try {
    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    const userCart = cartData.map((element) => element.get({ plain: true}))
    console.log(userCart)
    res.render('cart', {
      userCart,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
