const CuratorBD = require("../../../../../models/curator")

module.exports = async function(req, res) {
    new CuratorBD({
        name: req.body.pib,
        email: req.body.email,
        phoneNumber: req.body.phone,
        educational_Institution: req.body.education,
        password: req.body.password,
        IdAdmin: req.session._id,
    }).save((err) => {
        if (err) {
            Logger.Error(Logger.Mode.REGISTER, err);
            res.send(false);
        }
        else {
            Logger.Message(Logger.Mode.REGISTER, `(${req.session._id}) Add curator ${req.body.pib}, Email: ${req.body.email}`);
            res.send(true);
        }
    });
};