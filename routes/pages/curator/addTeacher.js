module.exports = async function (req, res) {
    try {
        new Teacher({
            name: req.body.name,
            code: req.body.code,
            curator: req.session._id,
            subjects: req.body['arrstudents[]'],
            students: Object.values(req.body['arrsubjects[]'])
        }).save((err) => {
            if (err) {
                Logger.Error(Logger.Mode.REGISTER, err);
                res.send(false);
            } else {
                Logger.Message(Logger.Mode.REGISTER, `(${req.session._id}) Add curator ${req.body.name}, Email: ${req.body.email}`);
                res.send(true);
            }
        });
    } catch (e) {
        console.log(e)
    }

};