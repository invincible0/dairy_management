exports.createTranPage = (req,res)=>{
    const query = "SELECT ID, NAME FROM customers WHERE ID="+req.params.id;
    database.query(query, (err, result) => {
        if(err || result.length==0){
            return res.redirect('/');
        }
        res.render('add_transaction.ejs', {
            customer: result[0]
        });
    });
};

exports.createTransaction = (req,res)=>{
    const CID=req.body.CID;
    const NAME = req.body.NAME;
    const Date = req.body.Date;
    const Type = req.body.Type;
    var Qty = req.body.Qty;
    if(Qty==''){
        Qty=0;
    }
    const Amount = parseInt(req.body.Amount);
    const Note = req.body.Note;
    const query = "INSERT INTO transactions (CID,NAME,DATEE,TYPE,QTY,AMOUNT,NOTE) VALUES ('"+CID+"','"+NAME+"','"+Date+"','"+Type+"','"+Qty+"','"+Amount+"','"+Note+"')";
    const query1="SELECT DUE FROM customers WHERE ID="+CID;
    var curdue=0
    database.query(query1,  (err, result) => {
        if(err){
           return res.redirect('/');
        }
        else{
            curdue=result[0].DUE;
            if(Type=='Payment'){
                curdue=curdue- parseInt(Amount);
            }
            else{
                curdue=curdue+ parseInt(Amount);
            }
            const query2="UPDATE customers SET DUE="+curdue+" WHERE ID="+CID;
            database.query(query2,  (err, result) => {
                if(err){
                   return res.redirect('/');
                }
            });
        }       
    });
    database.query(query,  (err, result) => {
        if(err){
           return res.redirect('/');
        }
        return res.redirect('/');
    });

};