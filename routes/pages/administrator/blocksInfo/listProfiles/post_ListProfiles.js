module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/ListProfiles.ejs', 'utf8');
        return res.send(ejs.render(data));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};