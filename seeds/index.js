const sequelize = require('../config/connection');
const Catagories = require('../models/Catagories');
const Products = require('../models/product');
const seedCatagories = require('./catagoriesData');
const seedProducts = require('./productsData');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Catagories.bulkCreate(seedCatagories, {
      individualHooks: true,
      returning: true,
    });
  
    const Product = await Products.bulkCreate(seedProducts);
  
    process.exit(0);
  };
  
  seedDatabase();