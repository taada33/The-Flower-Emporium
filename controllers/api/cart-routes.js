const router = require('express').Router();
const sequelize = require('../../config/connection')
const { productCart, product, user,} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const cartData = await cart.findAll({
      include: [{ model: product, through: productCart }, { model: user, through: productCart }],
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products -- ? 
  try {
    const cartData = await cart.findByPk(req.params.id, {
      include: [{ model: product, through: productCart }],
    });

    if (!cartData) {
      res.status(404).json({ message: 'No cart found with that id!' });
      return;
    }

    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put('/:id', withAuth, async (req, res) => {

  try {

    // Add product to cart
    app.post('/api/cart/addProduct', async (req, res) => {
      // get the id of the product from the frontend 
      let productId = request.body.productId;
      // find any existing cart of the user
      let cart = await productCart.findOne({ where: { id: req.session.user_id } });
      // find product already in cart 
      let productToBeAdded = await product.findOne({
        where: { productId: productId, cartId: cart[0].id }
      })
      if (productToBeAdded) {
        // just update the quantity
        let qnt = productToBeAdded.quantity + 1;
        Product.update({ quantity: qnt },
          {
            where: { productId: productId, cartId: cart[0].id }
          });
      } else {
        Product.create({
          quantity: 1,
          cartId: cart[0].id,
          productId: productId
        })
      }
    })
    
    // figure out which carts to remove by looping through all productcarts and searching the specific cart id
    const productCartsToRemove = productCart.findAll({
      where: {
        user_id: req.session.user_id
        //get a list of carts by searching user_id
      }}).filter(({ cart_id }) => !req.body.tagIds.includes(cart_id))
        .map(({ id }) => id);

      return Promise.all([
        productCart.destroy({ where: { id: productCartsToRemove } }),
      ]);

      res.status(200).json(productCart)
    }
      catch (err) {
        // console.log(err);
        res.status(400).json(err);

      }
    
    })

router.delete('/:id', async (req, res) => {

  try {
    const cartData = await cart.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;