const config = require('../config/config')
const routes = require('./routes/routes.js')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes.creditCards);
app.use(routes.payments);
app.use(routes.receipts);
app.use(routes.reports);

app.listen(config.app.port, () => {
	console.log("Server rodando")
});