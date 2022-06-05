const express = require('express');
const router = express.Router();


global.TG_Commands = [];


const settingStorage = require("./functionUpload/settingsStorage");
const uploadFiles = require("./functionUpload/uploadFiles");
const sendMessage = require("./functionUpload/sendMessage");
const addCommand = require("./functionUpload/addCommand");

const upload = settingStorage();

router.post("/upload_files", upload.array("files"), uploadFiles);

router.post("/profile/sendMessage", sendMessage);
router.post("/profile/addCommand", addCommand);

module.exports = router;
