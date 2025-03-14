const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');
const Cliente = require('../models/Cliente');
const Vendedor = require('../models/Vendedor');

const Pedido = sequelize.define('Pedido', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  clienteId: { type: DataTypes.INTEGER, references: { model: Cliente, key: 'id' } },
  vendedorId: { type: DataTypes.INTEGER, references: { model: Vendedor, key: 'id' } },
  total: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.ENUM('Pendente', 'Pago', 'Cancelado'), defaultValue: 'Pendente' },
}, { timestamps: true });

Pedido.belongsTo(Cliente, { foreignKey: 'clienteId' });
Pedido.belongsTo(Vendedor, { foreignKey: 'vendedorId' });

module.exports = Pedido;
