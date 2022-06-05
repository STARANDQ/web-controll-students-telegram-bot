module.exports = async function(req, res) {

    const isExistAdministrator = await Administrator.findOne({ _id: req.session._id });
    const isExistCurator = await Curator.findOne({_id: req.session._id});

    if(!isExistAdministrator && !isExistCurator) return res.redirect('/login');

    const link = ((req.originalUrl).toString())
        ?.replace("/profileInfo/", "")
        ?.replace("/cron", "");

    const isAdmin = (!!isExistAdministrator);

    return res.render('profileInfo/cron.ejs', {id: link.replace("/",""), isAdmin:isAdmin});
};