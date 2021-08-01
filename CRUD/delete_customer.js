exports.deleteCustomer = (req, res) => {
    const query = 'DELETE FROM customers WHERE ID ='+req.params.id;
    database.query(query, (err, result) => {
        if(err){
            res.status(500).send(err);
        }
        res.redirect('/customers');
    });
};