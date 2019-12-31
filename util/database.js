const Sequelize = require('sequelize').Sequelize;

//The below line will create the connection pool
const sequelize = new Sequelize('node-complete', 'root', 'admin', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;