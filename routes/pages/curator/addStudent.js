module.exports = async function(req, res) {
    try {
        new Student({
            name: req.body.pib,
            code: req.body.code,
            curator: req.session._id,
            TelegramID:req.body.telegramId,
        }).save((err) => {
            if (err) {
                Logger.Error(Logger.Mode.REGISTER, err);
                res.send(false);
            }
            else {
                Logger.Message(Logger.Mode.REGISTER, `(${req.session._id}) Add student ${req.body.pib}, Code: ${req.body.code}`);
                res.send(true);
            }
        });
    }catch (e) {
        console.log(e)
    }

};