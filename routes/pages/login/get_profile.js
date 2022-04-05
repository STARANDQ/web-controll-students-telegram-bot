const requestIp = require("request-ip");

module.exports = async function(req, res) {


    const isExistAdministrator = await Administrator.findOne({ _id: req.session._id });
    if(!!(isExistAdministrator)) {
        Logger.Warn(Logger.Mode.PROFILE, `${isExistAdministrator.name} ( ${isExistAdministrator.login} ) login to the server`, requestIp.getClientIp(req));
        return res.render('administrator/index.ejs');
    }

    const isExistCurator = await Curator.findOne({_id: req.session._id});
    if(!!(isExistCurator)) {
        Logger.Message(Logger.Mode.PROFILE, `${isExistCurator.name} ( ${isExistCurator.login} ) login to the server`, requestIp.getClientIp(req));
        return res.render('curator/index.ejs');
    }

    return res.redirect('/');
};