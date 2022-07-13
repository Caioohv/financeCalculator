const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {res.json('retorno get /reports')})
	.post((req, res) => {res.json('retorno post /reports')})
	.put((req, res) => {res.json('retorno put /reports')})
	.delete((req, res) => {res.json('retorno delete /reports')});


module.exports = router;