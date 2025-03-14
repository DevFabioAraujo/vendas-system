const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

const Categoria = sequelize.define('Categoria', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false, unique: true },
}, { timestamps: false });

module.exports = Categoria;
