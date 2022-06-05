module.exports = async function(req, res) {

    const administrator = await Administrator.findOne({ _id: req.session._id });
    if(!administrator) return res.send("[ ERROR ] You are not administrator!");

    try {
        const data = await fs.readFileSync(__dirname + '/ListTeachers.ejs', 'utf8');

        const TeacherList = await Teacher.find();
        await Promise.all(TeacherList.map(async (elem) => {
            elem.curator = (await Curator.findOne({_id:elem.curator}))?.name;
            return elem;
        }));

        return res.send(ejs.render(data, {arrTeacher:TeacherList}));
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};