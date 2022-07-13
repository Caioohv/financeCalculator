const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {res.json('retorno get /payments')})
	.post((req, res) => {res.json('retorno post /payments')})
	.put((req, res) => {res.json('retorno put /payments')})
	.delete((req, res) => {res.json('retorno delete /payments')});


module.exports = router;