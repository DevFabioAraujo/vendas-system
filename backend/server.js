require('dotenv').config();  // Carrega as variáveis do .env antes de tudo

const express = require('express');
const cors = require('cors');
const sequelize = require('../backend/config');  // Importação correta do banco

// Importando os modelos corretamente
const Cliente = require('./models/Cliente');
const Vendedor = require('./models/Vendedor');
const Categoria = require('./models/Categoria');
const Produto = require('./models/Produto');
const Pedido = require('./models/Pedido');

const app = express();
app.use(express.json());  // Usando o express.json() diretamente
const PORT = process.env.PORT || 3001;  // Usa a porta do .env ou 3001 como padrão

app.use(cors());

// Sincronizando o banco de dados
sequelize.sync({ alter: true })  // Usa `alter: true` para atualizar tabelas sem perder dados
  .then(() => console.log('Banco de dados sincronizado com sucesso!'))
  .catch(err => console.error('Erro ao sincronizar o banco:', err));

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

