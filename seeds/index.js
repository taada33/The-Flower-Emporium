const sequelize = require('../config/connection');
const seedGalleries = require('./galleryInfo');
const seedProducts = require('./productInfo');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  await seedGalleries();

  process.exit(0);
};

seedAll();