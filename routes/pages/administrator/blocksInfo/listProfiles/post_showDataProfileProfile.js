module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/InfoProfile.ejs', 'utf8');
        const profile = await Profile.findOne({ _id: req.body._id });
        const curators = await Curator.find();
        return res.send(ejs.render(data, { profile:profile, curators:curators }));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};