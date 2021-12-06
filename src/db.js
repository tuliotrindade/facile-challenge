const sequelize = require('sequelize');

const connection  =  new  sequelize ( process.env.DATABASE_URL ,  { 
	dialect:  'postgres',
	protocol: 'postgres',
	logging:  true 
} ) ; 
/* const connection = new sequelize('desafio-tecnico', 'postgres', 'senha123', { dialect: 'postgres'}); */



module.exports = connection;
