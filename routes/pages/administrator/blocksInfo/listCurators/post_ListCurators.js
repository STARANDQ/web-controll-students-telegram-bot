module.exports = async function(req, res) {
    try {
        const data = await fs.readFileSync(__dirname + '/ListCurators.ejs', 'utf8');
        return res.send(ejs.render(data));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};