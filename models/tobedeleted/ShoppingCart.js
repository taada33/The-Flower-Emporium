const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShoppingCart extends Model { }

ShoppingCart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },

        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            },
        },

        order_state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'shoppingcart',
    }
);

module.exports = ShoppingCart;