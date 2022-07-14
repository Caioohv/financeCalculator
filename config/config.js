const config = require('./config.json');

module.exports = {
	app: () => {
		return config.app;
	},
	database: () => {
		return config.database;
	}
};