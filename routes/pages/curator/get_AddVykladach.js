module.exports = async function(req, res) {

    const curator = await Curator.findOne({ _id: req.session._id });
    if(!curator) return res.send("[ ERROR ] You are not curator!");

    try {
        const TeacherList = await Student.find({curator:curator._id});
        // console.log(TeacherList)
        return res.render('curator/addTeacher.ejs', {TeacherList:TeacherList});
    } catch (err) {
        return res.send('<h1>' +  err + '</h1>');
    }
};
