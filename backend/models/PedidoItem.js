const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const PedidoItem = sequelize.define('PedidoItem', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  pedidoId: { 
    type: DataTypes.INTEGER, 
    references: { 
      model: Pedido, 
      key: 'id' 
    },
    allowNull: false
  },
  produtoId: { 
    type: DataTypes.INTEGER, 
    references: { 
      model: Produto, 
      key: 'id' 
    },
    allowNull: false
  },
  quantidade: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    validate: {
      min: 1
    }
  },
  precoUnitario: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, { 
  timestamps: true,
  hooks: {
    beforeValidate: (pedidoItem) => {
      pedidoItem.subtotal = pedidoItem.quantidade * pedidoItem.precoUnitario;
    }
  }
});

module.exports = PedidoItem;
