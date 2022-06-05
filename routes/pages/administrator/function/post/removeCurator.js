const CuratorBD = require("../../../../../models/curator")

module.exports = async function(req, res) {

    new CuratorBD({
        _id:req.body._id
    }).deleteOne((err) => {
        if (err) {
            Logger.Error(Logger.Mode.PROFILE, err);
            res.send(false);
        }
        else {
            Logger.Message(Logger.Mode.PROFILE, `Remove`);
            res.send(true);
        }
    });
};