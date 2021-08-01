const express = require('express');
const router = express.Router();
const read_transactions= require('../CRUD/read_transactions');

router.get('/',read_transactions.readAll);
router.post('/filter',read_transactions.readOnDate);

module.exports=router;