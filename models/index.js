// import models
const Products = require('./Products');
const Categories = require('./Categories');
const ProductCart = require('./ProductCart');
const User = require('./User')

// Products belongsTo Category
Products.belongsTo(Categories, {
  foreignKey: 'category_id',
});
// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'category_id',

});

User.belongsToMany(Products,{
  through:ProductCart,
  foreignKey:'user_id'
})

Products.belongsToMany(User,{
  through:ProductCart,
  foreignKey:'product_id'
})

module.exports = {
  Products,
  Categories,
  User,
  ProductCart,
};

module.exports = { User, Categories, Products, ProductCart };