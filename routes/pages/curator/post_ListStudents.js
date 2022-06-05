module.exports = async function(req, res) {

    const curator = await Curator.findOne({ _id: req.session._id });
    if(!curator) return res.send("[ ERROR ] You are not curator!");

    try {
        const TeacherList = await Student.find({curator:curator._id});
        return res.render('curator/ListStudents.ejs', {arrTeacher:TeacherList});

    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};

