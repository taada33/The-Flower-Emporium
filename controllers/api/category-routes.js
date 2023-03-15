const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products -- ? 
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category -- ?
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // First, we find a category using their primary key (provided by params)
    // const categoryData = await Category.findByPk(req.params.id);
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    // If userData evaluates as false (no user exists with that primary key), then we will send an error message
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    res.json({ message: 'This category has ids!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value  --? 

  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }


});

module.exports = router;
