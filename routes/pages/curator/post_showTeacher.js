module.exports = async function(req, res) {

    const administrator = await Curator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not curator!");

    try {
        const profile = await Teacher.findOne({_id:req.body.id})
        console.log(profile)
        res.send(profile)
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};