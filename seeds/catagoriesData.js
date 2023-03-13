const { Catagories } = require('../models');

const catagoriesdata = [
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