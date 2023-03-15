const router = require('express').Router();
const { Products, User, Categories, Shopping_Cart  } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all products for homepage
router.get('/api/product', async (req, res) => {
  try {
    const dbProductData = await Products.findAll({
      include: [
        {
          model: Categories,
          // attributes: ['name', 'description', 'stocks' , 'prices','Category id'], 
        },
      ],
    });

    const products = dbProductData.map((Product) =>
      Product.get({ plain: true })
    );

    res.render('homepage', {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one product
// Use the custom middleware before allowing the user to access the gallery
router.get('/api/product/:id', withAuth, async (req, res) => {
  try {
    const dbProductData = await product.findByPk(req.params.id, {
      include: [
        {
          model: product,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const product = dbProductData.get({ plain: true });
    res.render('product', { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one cart
// Use the custom middleware before allowing the user to access the painting
router.get('/api/cart', withAuth, async (req, res) => {
  try {
    const dbCartData = await cart.findByPk(req.params.id);

    const cart = dbCartData.get({ plain: true });

    res.render('cart', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

