const express= require('express');
const router = express.Router();
const createTransaction = require('../CRUD/create_transaction');

router.get('/add/:id',createTransaction.createTranPage);
router.post('/add/:id',createTransaction.createTransaction);

module.exports= router;