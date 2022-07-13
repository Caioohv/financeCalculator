const express = require('express');
const router = express.Router();

router.route('/')
	.get((req, res) => {res.json('retorno get /receipts')})
	.post((req, res) => {res.json('retorno post /receipts')})
	.put((req, res) => {res.json('retorno put /receipts')})
	.delete((req, res) => {res.json('retorno delete /receipts')});


module.exports = router;