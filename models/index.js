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

