const router = require('express').Router();
const sequelize = require('../../config/connection')
const { cart, product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const cartData = await cart.findAll({
      include: [{ model: Product }],
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
      include: [{ model: product }],
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

router.post('/', async (req, res) => {
  // create a new cart -- ?
  try {
    const cartData = await cart.create({
      cart_name: req.body.cart_name,
    });
    res.status(200).json(cartData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// different models connecting to each other, create a list of ids, update-- remove the item 
// grab the cart by id, remove the id from the const, filter - js, use that const to update 
// grab the cart by id,filter - js inside of router , .save()
//cart model - products 

// something adds to the cart, create a new order, each order will be a new model keep add into product id 
// make a table, handles the cart, reference, manytomany, update the table through the product 

// update product
router.put('/:id', async (req, res) => {
  // update a cart  by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then((tag) => {
      //find all associated products from Producttag
      return ProductCart.findAll({ where: { cart_id: req.params.id } })
    })
    .then((productCarts) => {
      //get list of current product_ids
      const productCartIds = productCarts.map(({ product_id }) => product_id);
      //create a filtered list of new product_ids
      const newProductCarts = req.body.productIds
        .filter((product_id) => !productCartIds.includes(product_id))
        .map((product_id) => {
          return {
            tag_id: req.params.id,
            product_id,
          }
        })
      // figure out which ones to remove
      const productCartsToRemove = productTags
        .filter(({ product_id }) => !req.body.productIds.includes(product_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductCart.destroy({ where: { id: productCartsToRemove } }),
        ProductCart.bulkCreate(newProductCarts),
      ]);
    })
    .then((updatedProductCarts) => res.json(updatedProductCarts))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});


router.delete('/:id', async (req, res) => {
  // delete a cart by its `id` value  --? 

  try {
    const cartData = await cart.destroy({
      where: {
        id: req.params.id
      }
    });

    // if (!categoryData) {
    //   res.status(404).json({ message: 'No category found with that id!' });
    //   return;
    // }

    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;