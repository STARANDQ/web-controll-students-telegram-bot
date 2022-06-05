module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/ListProfiles.ejs', 'utf8');
        const ProfileList = await Profile.find();
        await Promise.all(ProfileList.map(async (elem) => {
            elem.Curator = (await Curator.findOne({_id:elem.Curator}))?.name;
            return elem;
        }));
        return res.send(ejs.render(data, {arrProfile:ProfileList}));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};