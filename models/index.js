// import models
const Product = require('./Product');
const Category = require('./Category');
const cart = require('./Cart');
const ProductCart = require('./ProductCart');
const user = require('/user')

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',

});
user.belongsToMany(Product,{
  through:ProductCart,
  foreignKey:'user_id'
})

product.belongsToMany(user,{
  through:ProductCart,
  foreignKey:'product_id'
})

module.exports = {
  Product,
  Category,
  Cart,
  ProductCart,
};
