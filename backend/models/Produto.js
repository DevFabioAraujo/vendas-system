const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');
const Categoria = require('../models/Categoria');

const Produto = sequelize.define('Produto', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  preco: { type: DataTypes.FLOAT, allowNull: false },
  estoque: { type: DataTypes.INTEGER, allowNull: false },
  categoriaId: { type: DataTypes.INTEGER, references: { model: Categoria, key: 'id' } },
}, { timestamps: true });

Produto.belongsTo(Categoria, { foreignKey: 'categoriaId' });

module.exports = Produto;

