const sequelize = require('sequelize');
const connection = new sequelize('desafio-tecnico', 'postgres', 'senha123', { dialect: 'postgres'});

module.exports = connection;