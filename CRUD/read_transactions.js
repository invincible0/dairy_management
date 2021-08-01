exports.readAll = (req,res)=>{
    query = "SELECT * FROM transactions ORDER BY ID DESC";
    database.query(query,  (err, result) => {
        if(err){
           return res.render('404');
        }
        res.render('index.ejs', {
            transactions:result
        });
    });
};

exports.readOnDate = (req,res)=>{
    const date=req.body.Date;
    const query = "SELECT * FROM transactions WHERE DATEE="+"'"+date+"'"+" ORDER BY ID DESC";
    database.query(query,  (err, result) => {
        if(err){
           return res.render('404');
        }
        res.render('index.ejs', {
            transactions:result
        });
    });
}