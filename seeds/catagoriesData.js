const { Catagories } = require('../models');

const catagoriesData = [
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

const seedCatagories = () => Catagories.bulkCreate(catagoriesData);

module.exports = seedCatagories;