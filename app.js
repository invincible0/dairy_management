const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anurag123",
    database: "dairy"
});

database.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});
global.database=database;

app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const indexRoute=require('./routes/index');
const customerRoute=require('./routes/customer');
const transactionRoute= require('./routes/transactions');
const create_customer = require('./CRUD/create_customer');

app.use('/',indexRoute);
// app.post('/customers/add',create_customer.addCustomer);
app.use('/customers',customerRoute);
app.use('/transactions',transactionRoute);

app.use((req,res) => {
    res.render('404.ejs',{title: 'Page not found'})
});

app.listen(3000, () => {
    console.log(`server running on port: 3000}`);
});
