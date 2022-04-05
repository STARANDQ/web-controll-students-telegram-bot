module.exports = async function(req, res) {

    const isExistAdministrator = await Administrator.findOne({ _id: req.session._id });
    const isExistCurator = await Curator.findOne({_id: req.session._id});

    if(isExistAdministrator || isExistCurator) return res.redirect('/profile');

    return res.render('login/login.ejs')
};