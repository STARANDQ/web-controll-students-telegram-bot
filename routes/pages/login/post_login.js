module.exports = async function(req, res) {
    const login = req.body.login;
    const password = req.body.password;

    const isExistAdministrator = await Administrator.findOne({ login: login, password: password });
    const isExistCurator = await Curator.findOne({ login: login, password: password });

    const user = isExistAdministrator || isExistCurator;

    if(!!(user)) {
        req.session._id = user._id;
        res.send(true);
    }
    else await res.send(false);
};