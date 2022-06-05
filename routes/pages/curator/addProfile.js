module.exports = async function(req, res) {
    new Profile({
        name: req.body.name,
        TelegramID: req.body.chatId,
        Curator: req.session._id,
    }).save((err) => {
        if (err) {
            Logger.Error(Logger.Mode.REGISTER, err);
            res.send(false);
        }
        else {
            Logger.Message(Logger.Mode.REGISTER, `(${req.session._id}) Add profile ${req.body.name}, Code: ${req.body.chatId}`);
            res.send(true);
        }
    });
};