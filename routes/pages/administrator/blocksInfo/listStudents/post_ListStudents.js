module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/ListStudents.ejs', 'utf8');

        const StudentList = await Student.find();
        await Promise.all(StudentList.map(async (elem) => {
            elem.curator = (await Curator.findOne({_id:elem.curator}))?.name;
            return elem;
        }));

        return res.send(ejs.render(data, {arrStudents:StudentList}));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};