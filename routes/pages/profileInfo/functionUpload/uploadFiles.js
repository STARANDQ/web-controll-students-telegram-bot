module.exports = async function(req, res) {
    const data = [];
    req.files.forEach(file => {
        data.push({
            name: file.originalname,
            serverName: file.path
        });
    });
    res.send(data);
};