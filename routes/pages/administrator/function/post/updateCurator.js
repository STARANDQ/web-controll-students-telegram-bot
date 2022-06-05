const CuratorBD = require("../../../../../models/curator")

module.exports = async function(req, res) {
    CuratorBD.updateOne({_id: req.body.id},
        {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            educational_Institution: req.body.educational_Institution,
            password: req.body.password
        }, function(err, data) {
        if (err) {
            res.send(false);
            throw err;
        }
        res.send(true);
    });
};