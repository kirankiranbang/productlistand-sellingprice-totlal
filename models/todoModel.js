const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');





const Todo  = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sellingPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
 tableName: 'productsProject', // Corrected table name// Name of your MySQL table
  timestamps: true, // If you want Sequelize to manage createdAt and updatedAt fields
});

console.log("Table name is 'todos' in models-user");
module.exports = Todo ;
