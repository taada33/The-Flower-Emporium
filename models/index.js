const User = require('./User');
const Catagories = require('./Catagories');
const Products = require('./Products');
const ShoppingCart = require('./ShoppingCart');

Catagories.hasMany(Products, {
    foreignkey: 'catagory_id'
});

Products.belongsTo(Catagories, {
    foreignkey: 'catagory_id'
});

ShoppingCart.hasMany(Products, {
    foreignkey: 'product_id'
});

ShoppingCart.hasOne(User, {
    foreignkey: 'user_id'
});

module.exports = { User, Catagories, Products, ShoppingCart };