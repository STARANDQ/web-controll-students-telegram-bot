const express = require('express');
const router = express.Router();
global.fs = require("fs");

global.Logger = require('../Logger');

global.User = require('../models/user');
global.Administrator = require('../models/administrator');
global.Curator = require('../models/curator');
global.path = require("path");

const SETTINGS = JSON.parse(fs.readFileSync('./settings.json').toString());

global.LoggerScript = SETTINGS.LoggerScript;
global.Telegram = "https://t.me/" + SETTINGS.Telegram;

// Connectors

// GET
const get_logout = require("./pages/login/get_logout");
const get_login = require("./pages/login/get_login");
const get_profile = require("./pages/login/get_profile");
// POST
const post_login = require("./pages/login/post_login");
const post_addCurator = require("./pages/administrator/function/post/addCurator")
// FUNCTION


// SHOW BLOCKS
const listCurators = require("./pages/administrator/blocksInfo/listCurators/post_ListCurators");
const listTeacher = require("./pages/administrator/blocksInfo/listTeachers/post_ListTeachers");
const listStudents = require("./pages/administrator/blocksInfo/listStudents/post_ListStudents");
const listProfiles = require("./pages/administrator/blocksInfo/listProfiles/post_ListProfiles");
const addCurator = require("./pages/administrator/blocksInfo/addCurator/post_AddCurator");
const addProfile = require("./pages/administrator/blocksInfo/addProfile/post_AddProfile");
const mainPage = require("./pages/administrator/blocksInfo/mainPage/post_MainPage");


/* [ - - - - - LOGIN - - - - - ] */
router.get('/', (req, res, next) => {get_login(req, res);});
router.post('/login', (req, res, next) => {post_login(req, res);});

router.get('/profile', (req, res, next) => {get_profile(req, res);});

/* [ - - - - - LOGOUT - - - - - ] */
router.get('/logout', (req, res, next) => {get_logout(req, res, next)});

router.get('/error', (req, res, next) => {return res.render('error/index')});


/* [ - - - - - SHOW BLOCK - - - - - ] */
router.post('/listCurator', (req, res, next) => {listCurators(req, res);});
router.post('/listTeacher', (req, res, next) => {listTeacher(req, res);});
router.post('/listStudents', (req, res, next) => {listStudents(req, res);});
router.post('/listProfiles', (req, res, next) => {listProfiles(req, res);});
router.post('/mainPage', (req, res, next) => {mainPage(req, res);});
router.post('/addCurator', (req, res, next) => {addCurator(req, res);});
router.post('/addProfile', (req, res, next) => {addProfile(req, res);});



router.post('/addCuratorUser', (req, res, next) => {post_addCurator(req, res);});



module.exports = router;
