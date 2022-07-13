const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {res.json('retorno get /credit-cards')})
	.post((req, res) => {res.json('retorno post /credit-cards')})
	.put((req, res) => {res.json('retorno put /credit-cards')})
	.delete((req, res) => {res.json('retorno delete /credit-cards')});


module.exports = router;