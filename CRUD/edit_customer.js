exports.editCustomer = (req,res)=>{
    const Name=req.body.Name;
    const Address=req.body.Address;
    const Mobile=req.body.Mobile;
    const Note = req.body.Note;
    const query = 'UPDATE customers SET Name="'+Name+'",Address="'+Address+'",Mobile="'+Mobile+'",Note="'+Note+'" WHERE Id="'+req.params.id+'"';
    database.query(query, (err, result) => {
        if(err){
            return res.redirect('/');
        }
        res.redirect('/customers/'+req.params.id);
    });
};

exports.editPage = (req,res)=>{
    const id=req.params.id;
    const query = "SELECT * FROM customers WHERE ID="+id;
    database.query(query, (err, result) => {
        if(err || result.length==0){
            return res.redirect('/');
        }
        res.render('edit_customer.ejs', {
            customer: result[0]
        });
    });
}