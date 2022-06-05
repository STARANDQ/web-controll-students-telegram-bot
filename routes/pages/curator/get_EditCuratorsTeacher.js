module.exports = async function(req, res) {
    Teacher.updateOne({_id: req.body.id},
        {
            name: req.body.name,
            code: req.body.code,
            students: req.body.students,
            subjects: req.body.subjects,
        }, function(err, data) {
            if (err) {
                res.send(false);
                throw err;
            }
            res.send(true);
        });
};