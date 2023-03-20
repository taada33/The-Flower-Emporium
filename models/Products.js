const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { }

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:10,
        },

        price: {
<<<<<<< HEAD
            type: DataTypes.DECIMAL,
=======
            type: DataTypes.DECIMAL(10,2),
>>>>>>> 643749d22c3ee5adddc1159c912b57f2983c4ee6
            allowNull: false,
        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        timestamps:false,
        underscored: true,
<<<<<<< HEAD
        modelName: 'Products',
=======
        modelName: 'products',
>>>>>>> 643749d22c3ee5adddc1159c912b57f2983c4ee6
    }
);

module.exports = Products;