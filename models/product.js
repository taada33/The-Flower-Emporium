const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

Products.init(
    {
        id: {
            type: DataTypes.INTEGER.STRING,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        catagory_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'catagories',
                key: 'id'
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'products',
    }
);

module.exports = Products;