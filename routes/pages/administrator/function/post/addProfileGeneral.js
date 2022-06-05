module.exports = async function(req, res) {
    new Profile({
        name: req.body.name,
        TelegramID: req.body.TelegramID,
        Curator: req.body.Curator
    }).save((err) => {
        if (err) {
            Logger.Error(Logger.Mode.PROFILE, err);
            res.send(false);
        }
        else {
            Logger.Message(Logger.Mode.PROFILE, `(${req.session._id}) Add profile`);
            res.send(true);
        }
    });
};