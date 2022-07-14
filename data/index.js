const Sequelize = require('sequelize'); 
const config = require('../config/config.js');

const connection = new Sequelize(config.database);

