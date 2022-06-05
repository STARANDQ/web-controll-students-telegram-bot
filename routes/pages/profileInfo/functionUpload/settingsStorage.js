const multer = require("multer");

module.exports = function() {
    const storage = multer.diskStorage(
        {
            destination: './uploads/',
            filename: async function ( req, file, cb ) {
                let dir = req.body.id;

                if (!fs.existsSync("./uploads/" + dir)){
                    fs.mkdirSync("./uploads/" + dir);
                }
                await cb( null, dir + "/" + /*Date.now() + */ "_" + file.originalname);
            }
        }
    );
    return multer({ storage: storage })
};