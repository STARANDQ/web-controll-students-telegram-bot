module.exports = async function(req, res) {
    Profile.updateOne({_id: req.body.id},
        {
            name: req.body.name,
            Curator: req.body.Curator,
        }, function(err, data) {
        if (err) {
            res.send(false);
            throw err;
        }
        res.send(true);
    });
};