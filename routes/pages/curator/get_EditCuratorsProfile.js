module.exports = async function(req, res) {
    Profile.updateOne({_id: req.body.id},
        {
            id: req.body.id,
            TelegramID: req.body.tgId,
            commandArr: req.body.code,
            name: req.body.name,
            cronArr: req.body.cron,
        }, function(err, data) {
            if (err) {
                res.send(false);
                throw err;
            }
            res.send(true);
        });
};