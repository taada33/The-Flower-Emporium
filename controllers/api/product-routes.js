const router = require('express').Router();
const { Products, Categories, ProductCart,User} = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Products.findAll({
      include: [{ model: Categories },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Products.findByPk(req.params.id, {
      include: [{ model: Categories }, { model: User, through: ProductCart }
      ],
    });
    
    if (!productData) {
      res.status(404).json({ message: 'No product with this id' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new product -- ?
  try {
    const productData = await Products.create({
      product_name: req.body.product_name,
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a product by its `id` value
  try {
    // First, we find a product using their primary key (provided by params)
    const productData = await Products.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    // If userData evaluates as false (no user exists with that primary key), then we will send an error message
    if (!productData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }

    res.json({ message: 'This product has ids!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const productData = await Products.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(productData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
