module.exports = async function(req, res) {

    const curator = await Curator.findOne({ _id: req.session._id });
    if(!curator) return res.send("[ ERROR ] You are not curator!");

    try {
        return res.render('curator/addProfile.ejs');
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};
