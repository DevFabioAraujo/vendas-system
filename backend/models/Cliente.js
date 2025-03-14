const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Cliente = sequelize.define('Cliente', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: true },
}, { timestamps: true });

module.exports = Cliente;
