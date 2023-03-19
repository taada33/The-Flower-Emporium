const { Categories } = require('../models');

const categoriesData = [
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

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;