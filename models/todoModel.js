const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
}, {
  tableName: 'todos', // Name of your MySQL table
  timestamps: true, // If you want Sequelize to manage createdAt and updatedAt fields
});

console.log("Table name is 'todos' in models-user");
module.exports = User;
