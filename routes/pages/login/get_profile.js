module.exports = async function(req, res) {

    const isExistAdministrator = await Administrator.findOne({ _id: req.session._id });
    if(!!(isExistAdministrator)) {
        Logger.Warn(Logger.Mode.PROFILE, "Input server " + isExistAdministrator.name, req.socket.localAddress);
        return res.render('administrator/index.ejs');
    }

    const isExistCurator = await Curator.findOne({_id: req.session._id});
    if(!!(isExistCurator)) {
        Logger.Message(Logger.Mode.PROFILE, "Input server " + isExistCurator.name, req.socket.localAddress);
        return res.render('curator/index.ejs');
    }

    return res.redirect('/');
};