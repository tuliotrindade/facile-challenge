const sequelize = require('sequelize');
const connection = new sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
				rejectUnauthorized: false,
			}
    }
		
});;

module.exports = connection;