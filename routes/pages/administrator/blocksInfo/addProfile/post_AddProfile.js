module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/AddProfile.ejs', 'utf8');
        const curators = await Curator.find();
        return res.send(ejs.render(data, { curators: curators }));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};