const router = require('express').Router();
const { User, Categories, Products } = require('../models');
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
//     });
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

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;