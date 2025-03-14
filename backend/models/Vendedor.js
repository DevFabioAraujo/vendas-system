const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Vendedor = sequelize.define('Vendedor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: true });

module.exports = Vendedor;
