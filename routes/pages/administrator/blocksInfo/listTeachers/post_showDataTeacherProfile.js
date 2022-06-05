module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/InfoTeacher.ejs', 'utf8');
        const teacher = await Teacher.findOne({ _id: req.body._id });
        return res.send(ejs.render(data, { teacher:teacher }));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};