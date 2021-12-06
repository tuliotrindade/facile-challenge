const sequelize = require('sequelize');
const connection = new sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true	
    }
});;

module.exports = connection;