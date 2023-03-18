const { Categories } = require('../models/');

const CategoriesData = [
    {
        name: 'Flowers',
    },

    {
        name: 'Plants',
    },

    {
        name: 'Planters',
    },

    {
        name: 'Home Decor',
    },
];

const seedCategories = () => Categories.bulkCreate(CategoriesData);

module.exports = seedCategories;