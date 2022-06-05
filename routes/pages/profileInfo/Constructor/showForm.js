module.exports = async function(req, res) {

    const isExistAdministrator = await Administrator.findOne({ _id: req.session._id });
    const isExistCurator = await Curator.findOne({_id: req.session._id});

    if(!isExistAdministrator && !isExistCurator) return res.send('You not admin or curator');

    try {
        const data = await fs.readFileSync(__dirname + '/view/index.ejs', 'utf8');
        return res.send(ejs.render(data));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};