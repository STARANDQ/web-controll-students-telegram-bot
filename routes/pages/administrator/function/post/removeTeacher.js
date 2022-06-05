module.exports = async function(req, res) {
    new Teacher({
        _id:req.body._id
    }).deleteOne((err) => {
        if (err) {
            Logger.Error(Logger.Mode.PROFILE, err);
            res.send(false);
        }
        else {
            Logger.Message(Logger.Mode.PROFILE, `Remove teacher`);
            res.send(true);
        }
    });
};