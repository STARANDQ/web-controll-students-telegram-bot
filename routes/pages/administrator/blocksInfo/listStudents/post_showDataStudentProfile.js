module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/InfoStudents.ejs', 'utf8');
        const student = await Student.findOne({ _id: req.body._id });
        return res.send(ejs.render(data, { student:student }));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};