module.exports = async function(req, res) {
    const curator = await Curator.findOne({ _id: req.session._id });
    if(!curator) return res.send("[ ERROR ] You are not curator!");
    try {
        const TeacherList = await Profile.find({ Curator: curator._id });
        const profile = await Profile.findOne({_id:req.body.id})
        console.log(profile)
        return res.render('curator/ListProfiles.ejs', {arrProfiles:TeacherList});

    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};

