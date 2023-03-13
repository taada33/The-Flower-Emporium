const sequelize = require('../config/connection');
const seedCatagories = require('./catagoriesData');
const seedProducts = require('./productsData');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedCatagories();
  
    await seedProducts();
  
    process.exit(0);
};

seedAll();