module.exports = async function(req, res) {
    Student.updateOne({_id: req.body.id},
        {
            name: req.body.name,
            code: req.body.code,
        }, function(err, data) {
        if (err) {
            res.send(false);
            throw err;
        }
        res.send(true);
    });
};