const router = require('express').Router();
const sequelize = require('../../config/connection')
const withAuth = require('../../utils/auth');
const { Categories, Products, User, ProductCart} = require('../../models');

// The `/api/productCart` endpoint

router.post('/', async (req,res) => {
  try {
    const cartData = await ProductCart.create({
      product_id: req.body.id,
      user_id: req.session.user_id,
      quantities: req.body.quantity,
    })
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
})

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

router.put('/:id', async (req,res) => {
  try {
    const cartData = ProductCart.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/checkout', async (req,res) => {
  try {
    //pass body to stripe
    console.log(req.body)


    //update quantities on products

    //first get stocks of products to update
    const cartData = await ProductCart.findAll({
      include: { model: Products},
      where: {user_id: req.session.user_id}
    });
    const userCart = cartData.map((element) => element.get({ plain: true}))
    let stocks = [];
    let ids = [];
    userCart.forEach((element) => {
      stocks.push(element.product.stock)
      ids.push(element.product.id)
    })
    let quantities = req.body.map((element) => +element.quantities)

    //array subtraction to get new stocks
    let newStocks = stocks.map((stock,index) => {
      return stock - quantities[index];
    })

    //then update Products
    for(let i = 0; i < newStocks.length; i++){
      const productData = await Products.update({stock: newStocks[i]}, {where: { id: ids[i]}})
    }

    

    // deleteAll where user_id = session id
    const cartDeleteData = await ProductCart.destroy({
      where: {
        user_id: req.session.user_id,
      }
    });
    res.status(200).json(cartDeleteData);
  } catch (err) {
    res.status(500).json(err)
  }
})

// router.post('/', async(req,res) =>{
//   try{
//     const dbCartData = await ProductCart.bulkcreate({
//       cartID: req.body.cart_id
//     })
//   }
// })



// router.put('/:id', async (req, res) => {

//   try {

//     // Add product to cart
//     app.post('/api/cart/addProduct', async (req, res) => {
//       // get the id of the product from the frontend 
//       let productId = request.body.productId;
//       // find any existing cart of the user
//       let cart = await productCart.findOne({ where: { id: req.session.user_id } });
//       // find product already in cart 
//       let productToBeAdded = await Products.findOne({
//         where: { productId: productId, cartId: cart[0].id }
//       })
//       if (productToBeAdded) {
//         // just update the quantity
//         let qnt = productToBeAdded.quantity + 1;
//         Products.update({ quantity: qnt },
//           {
//             where: { productId: productId, cartId: cart[0].id }
//           });
//       } else {
//         Products.create({
//           quantity: 1,
//           cartId: cart[0].id,
//           productId: productId
//         })
//       }
//     })
    
//     // figure out which carts to remove by looping through all productcarts and searching the specific cart id
//     const productCartsToRemove = ProductCart.findAll({
//       where: {
//         user_id: req.session.user_id
//         //get a list of carts by searching user_id
//       }}).filter(({ cart_id }) => !req.body.tagIds.includes(cart_id))
//         .map(({ id }) => id);

//       return Promise.all([
//         ProductCart.destroy({ where: { id: productCartsToRemove } }),
//       ]);

//       res.status(200).json(ProductCart)
//     }
//       catch (err) {
//         // console.log(err);
//         res.status(400).json(err);

//       }
    
//     })

router.delete('/:id', async (req, res) => {

  try {
    const cartData = await ProductCart.destroy({
      where: {
        product_id: req.params.id
      }
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;