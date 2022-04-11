module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/ListCurators.ejs', 'utf8');
        const CuratorList = await Curator.find();
        return res.send(ejs.render(data, {arrCurator:CuratorList}));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};