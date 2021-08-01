exports.readAll = (req,res)=>{
    const query = 'SELECT * FROM customers WHERE ID!=1 ORDER BY NAME';
    database.query(query, (err, result) => {
        console.log(result);
        if(err){
            return res.redirect('/');
        }
        res.render('customers.ejs', {
            customers: result
        });
    });
};

exports.search = (req,res)=>{
    const name = req.body.Name;
    const query = "SELECT * FROM customers WHERE ID!=1 AND UPPER(NAME) LIKE UPPER('%"+name+"%') ORDER BY NAME";
    database.query(query, (err, result) => {
        if(err){
            return res.render('404');
        }
        res.render('customers.ejs', {
            customers: result
        });
    });
}

exports.getCustomer = (req,res)=>{
    const id=req.params.id;
    const query = "SELECT * FROM customers WHERE ID="+id;
    database.query(query, (err, result) => {
        if(err || result.length==0){
            return res.render('404');
        }
        const query1="SELECT * FROM transactions WHERE CID="+id+" ORDER BY ID DESC";
        database.query(query1,  (err, result1) => {
            if(err){
               return res.redirect('/');
            }
            res.render('customer.ejs', {
                customer: result[0],
                transactions:result1
            });
        });
    });
}

exports.searchDate = (req,res)=>{
    const date=req.body.Date;
    const id=req.params.id;
    const query = "SELECT * FROM customers WHERE ID="+id;
    database.query(query, (err, result) => {
        if(err || result.length==0){
            return res.redirect('/');
        }
        const query1="SELECT * FROM transactions WHERE DATEE="+"'"+date+"'"+"AND CID="+req.params.id+" ORDER BY ID DESC";
        database.query(query1,  (err, result1) => {
            if(err){
               return res.redirect('/');
            }
            res.render('customer.ejs', {
                customer: result[0],
                transactions:result1
            });
        });
    });
}