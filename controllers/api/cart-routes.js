const router = require('express').Router();
const sequelize = require('../../config/connection')
const withAuth = require('../../utils/auth');
const { Categories, Products, User, ProductCart} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const cartData = await cart.findAll({
      include: [{ model: Products, through: ProductCart }, { model: User, through: ProductCart }],
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
      include: [{ model: Products, through: ProductCart }],
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

// router.post('/', async(req,res) =>{
//   try{
//     const dbCartData = await ProductCart.bulkcreate({
//       cartID: req.body.cart_id
//     })
//   }
// })



router.put('/:id', withAuth, async (req, res) => {

  try {

    // Add product to cart
    app.post('/api/cart/addProduct', async (req, res) => {
      // get the id of the product from the frontend 
      let productId = request.body.productId;
      // find any existing cart of the user
      let cart = await productCart.findOne({ where: { id: req.session.user_id } });
      // find product already in cart 
      let productToBeAdded = await Products.findOne({
        where: { productId: productId, cartId: cart[0].id }
      })
      if (productToBeAdded) {
        // just update the quantity
        let qnt = productToBeAdded.quantity + 1;
        Products.update({ quantity: qnt },
          {
            where: { productId: productId, cartId: cart[0].id }
          });
      } else {
        Products.create({
          quantity: 1,
          cartId: cart[0].id,
          productId: productId
        })
      }
    })
    
    // figure out which carts to remove by looping through all productcarts and searching the specific cart id
    const productCartsToRemove = ProductCart.findAll({
      where: {
        user_id: req.session.user_id
        //get a list of carts by searching user_id
      }}).filter(({ cart_id }) => !req.body.tagIds.includes(cart_id))
        .map(({ id }) => id);

      return Promise.all([
        ProductCart.destroy({ where: { id: productCartsToRemove } }),
      ]);

      res.status(200).json(ProductCart)
    }
      catch (err) {
        // console.log(err);
        res.status(400).json(err);

      }
    
    })

router.delete('/:id', async (req, res) => {

  try {
    const cartData = await ProductCart.destroy({
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