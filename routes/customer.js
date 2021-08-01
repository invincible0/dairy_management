const express= require('express');
const router = express.Router();
const add=require('../crud/create_customer');
const read_customer = require('../crud/read_customer');
const edit_customer = require('../crud/edit_customer');
const deleteCustomer = require('../CRUD/delete_customer');

router.get('/',read_customer.readAll);
router.post('/',read_customer.search);

router.route('/add')
.get((req,res)=>{
    res.render('add_customer');
})
.post(add.addCustomer);

router.get('/edit/:id',edit_customer.editPage);

router.post('/edit/:id',edit_customer.editCustomer);
router.post('/:id',read_customer.searchDate);
router.get('/delete/:id',deleteCustomer.deleteCustomer);


router.get('/:id',read_customer.getCustomer);

module.exports = router;