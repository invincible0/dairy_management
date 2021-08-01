exports.addCustomer = (req,res)=>{
    const Name=req.body.Name;
    const Address=req.body.Address;
    const Mobile=req.body.Mobile;
    const Note = req.body.Note;
    const query = "INSERT INTO customers (Name,Address,Mobile,Note,Due) VALUES ('"+Name+"','"+Address+"','"+Mobile+"','"+Note+"','"+'0'+"')";
    database.query(query,  (err, result) => {
        if(err){
           return res.redirect('/');
        }
        return res.redirect('/customers');
    });
};