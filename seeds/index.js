const sequelize = require('../config/connection');
<<<<<<< HEAD
const seedGalleries = require('./galleryInfo');
const seedProducts = require('./productInfo');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  await seedGalleries();

  process.exit(0);
=======
const seedCatagories = require('./catagoriesData');
const seedProducts = require('./productsData');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    await seedCatagories();
  
    await seedProducts();
  
    process.exit(0);
>>>>>>> 7ae245f59351fdc98a7985cad8a95c473bbe0b8f
};

seedAll();