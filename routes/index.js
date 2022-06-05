const express = require('express');
const router = express.Router();
global.fs = require("fs");

global.Logger = require('../Logger');

global.User = require('../models/user');
global.Administrator = require('../models/administrator');
global.Curator = require('../models/curator');
global.Student = require('../models/student');
global.Teacher = require('../models/teacher');
global.Profile = require('../models/profile');
global.path = require("path");

const SETTINGS = JSON.parse(fs.readFileSync('./settings.json').toString());

global.LoggerScript = SETTINGS.LoggerScript;
global.Telegram = "https://t.me/" + SETTINGS.Telegram;

// Connectors

// GET
const get_logout = require("./pages/login/get_logout");
const get_login = require("./pages/login/get_login");
const get_profile = require("./pages/login/get_profile");
const get_addTeacher = require("./pages/curator/addTeacher")
const get_addStudent = require("./pages/curator/addStudent")
const get_addProfile = require("./pages/curator/addProfile")
const get_EditCuratorsStudent = require("./pages/curator/get_EditCuratorsStudent");
const get_EditCuratorsTeacher = require("./pages/curator/get_EditCuratorsTeacher");
const get_EditCuratorsProfile = require("./pages/curator/get_EditCuratorsProfile");

// POST
const post_login = require("./pages/login/post_login");
const post_addCurator = require("./pages/administrator/function/post/addCurator")
const post_showDataCuratorProfile = require("./pages/administrator/blocksInfo/listCurators/post_showDataCuratorProfile");
const post_showDataStudentProfile = require("./pages/administrator/blocksInfo/listStudents/post_showDataStudentProfile");
const post_showDataTeacherProfile = require("./pages/administrator/blocksInfo/listTeachers/post_showDataTeacherProfile");
const post_showDataProfileProfile = require("./pages/administrator/blocksInfo/listProfiles/post_showDataProfileProfile");
const post_updateCurator = require("./pages/administrator/function/post/updateCurator");
const post_updateStudent = require("./pages/administrator/function/post/updateStudent");
const post_updateTeacher = require("./pages/administrator/function/post/updateTeacher");
const post_updateProfile = require("./pages/administrator/function/post/updateProfile");
const post_removeCurator = require("./pages/administrator/function/post/removeCurator");
const post_removeStudent = require("./pages/administrator/function/post/removeStudent");
const post_removeTeacher = require("./pages/administrator/function/post/removeTeacher");
const post_removeProfile = require("./pages/administrator/function/post/removeProfile");
const post_sendMessageTG = require("./pages/administrator/function/post/sendMessageTG");
const post_addProfileGeneral = require("./pages/administrator/function/post/addProfileGeneral");
const post_CuratorRemoveStudent = require("./pages/administrator/function/post/removeStudent");
const post_CuratorRemoveProfile = require("./pages/administrator/function/post/removeProfile");
const post_CuratorRemoveTeacher = require("./pages/administrator/function/post/removeTeacher");

// SHOW BLOCKS
const listCurators = require("./pages/administrator/blocksInfo/listCurators/post_ListCurators");
const listTeacher = require("./pages/administrator/blocksInfo/listTeachers/post_ListTeachers");
const listStudentsAdmin = require("./pages/administrator/blocksInfo/listStudents/post_ListStudents");
const listProfilesAdmin = require("./pages/administrator/blocksInfo/listProfiles/post_ListProfiles");
const addCurator = require("./pages/administrator/blocksInfo/addCurator/post_AddCurator");
const addProfileAdmin = require("./pages/administrator/blocksInfo/addProfile/post_AddProfile");
const mainPage = require("./pages/administrator/blocksInfo/mainPage/post_MainPage");


const get_AddVykladach = require("./pages/curator/get_AddVykladach");
const get_AddStudent = require("./pages/curator/get_AddStudent");
const get_AddProfile = require("./pages/curator/get_AddProfile");
const listTeachers = require("./pages/curator/post_ListTeachers");
const listStudents = require("./pages/curator/post_ListStudents");
const listProfiles = require("./pages/curator/post_ListProfiles");
const post_showDataProfile = require("./pages/curator/post_showProfile");
const post_showDataStudent = require("./pages/curator/post_showStudent");
const post_showDataTeacher = require("./pages/curator/post_showTeacher");

// PROFILE
const get_profilePage = require("./pages/profileInfo/get_page");
const get_profileEditCurator = require("./pages/profileInfo/get_editCurator");
const get_profileCommand = require("./pages/profileInfo/get_command");
const get_profileCron = require("./pages/profileInfo/get_cron");
const get_profileSendMessage = require("./pages/profileInfo/get_sendMessage");
const post_showFormConstructorProfile = require("./pages/profileInfo/Constructor/showForm")


/*
  ____                                        _
 / ___|   ___   _ __     ___   _ __    __ _  | |
| |  _   / _ \ | '_ \   / _ \ | '__|  / _` | | |
| |_| | |  __/ | | | | |  __/ | |    | (_| | | |
 \____|  \___| |_| |_|  \___| |_|     \__,_| |_|

 */

/* [ - - - - - LOGOUT - - - - - ] */
router.get('/logout', (req, res, next) => {get_logout(req, res, next)});

/* [ - - - - - ERROR - - - - - ] */
router.get('/error', (req, res, next) => {return res.render('error/index')});

/* [ - - - - - LOGIN - - - - - ] */
router.get('/', (req, res, next) => {get_login(req, res);});
router.post('/login', (req, res, next) => {post_login(req, res);});
router.get('/profile', (req, res, next) => {get_profile(req, res);});

/*
  ____                          _
 / ___|  _   _   _ __    __ _  | |_    ___    _ __
| |     | | | | | '__|  / _` | | __|  / _ \  | '__|
| |___  | |_| | | |    | (_| | | |_  | (_) | | |
 \____|  \__,_| |_|     \__,_|  \__|  \___/  |_|

 */
//  Add functions
router.get('/AddTeacher', (req, res, next) => {get_AddVykladach(req, res);});
router.get('/AddStudent', (req, res, next) => {get_AddStudent(req, res);});
router.get('/AddProfile', (req, res, next) => {get_AddProfile(req, res);});
//  Output functions
router.get('/listTeachers', (req, res, next) => {listTeachers(req, res);});
router.get('/listStudents', (req, res, next) => {listStudents(req, res);});
router.get('/listProfiles', (req, res, next) => {listProfiles(req, res);});
//  Show modal window functions
router.post('/showDataProfilesProfile', (req, res, next) => {post_showDataProfile(req, res);});
router.post('/showDataStudentProfileCurator', (req, res, next) => {post_showDataStudent(req, res);});
router.post('/showDataTeacherProfileCurator', (req, res, next) => {post_showDataTeacher(req, res);});
// router.post('/updateCurator', (req, res, next) => {post_updateCurator(req, res);});
// router.post('/removeCurator', (req, res, next) => {post_removeCurator(req, res);});
router.post('/AddModelTeacher', (req, res, next) => {get_addTeacher(req, res);});
router.post('/AddModelStudent', (req, res, next) => {get_addStudent(req, res);});
router.post('/AddModelProfile', (req, res, next) => {get_addProfile(req, res);});
// NEW FUNC
router.post('/EditCuratorsStudent', (req, res, next) => {get_EditCuratorsStudent(req, res);});
router.post('/EditCuratorsTeacher', (req, res, next) => {get_EditCuratorsTeacher(req, res);});
router.post('/EditCuratorsProfile', (req, res, next) => {get_EditCuratorsProfile(req, res);});

router.post('/curatorRemoveStudent', (req, res, next) => {post_CuratorRemoveStudent(req, res);});
router.post('/curatorRemoveTeacher', (req, res, next) => {post_CuratorRemoveTeacher(req, res);});
router.post('/curatorRemoveProfile', (req, res, next) => {post_CuratorRemoveProfile(req, res);});
/*
    _          _               _
   / \      __| |  _ __ ___   (_)  _ __
  / _ \    / _` | | '_ ` _ \  | | | '_ \
 / ___ \  | (_| | | | | | | | | | | | | |
/_/   \_\  \__,_| |_| |_| |_| |_| |_| |_|

 */

/* [ - - - - - CURATOR LIST - - - - - ] */
router.post('/showDataCuratorProfile', (req, res, next) => {post_showDataCuratorProfile(req, res);});
router.post('/updateCurator', (req, res, next) => {post_updateCurator(req, res);});
router.post('/removeCurator', (req, res, next) => {post_removeCurator(req, res);});

/* [ - - - - - STUDENT LIST - - - - - ] */
router.post('/showDataStudentProfile', (req, res, next) => {post_showDataStudentProfile(req, res);});
router.post('/updateStudent', (req, res, next) => {post_updateStudent(req, res);});
router.post('/removeStudent', (req, res, next) => {post_removeStudent(req, res);});

/* [ - - - - - TEACHER LIST - - - - - ] */
router.post('/showDataTeacherProfile', (req, res, next) => {post_showDataTeacherProfile(req, res);});
router.post('/updateTeacher', (req, res, next) => {post_updateTeacher(req, res);});
router.post('/removeTeacher', (req, res, next) => {post_removeTeacher(req, res);});

/* [ - - - - - PROFILE LIST - - - - - ] */
router.post('/showDataProfileProfile', (req, res, next) => {post_showDataProfileProfile(req, res);});
router.post('/updateProfile', (req, res, next) => {post_updateProfile(req, res);});
router.post('/removeProfile', (req, res, next) => {post_removeProfile(req, res);});

/* [ - - - - - ADD CURATOR - - - - - ] */
router.post('/addCuratorUser', (req, res, next) => {post_addCurator(req, res);});

/* [ - - - - - ADD PROFILE - - - - - ] */
router.post('/sendMessageTG', (req, res, next) => {post_sendMessageTG(req, res);});
router.post('/addProfileGeneral', (req, res, next) => {post_addProfileGeneral(req, res);});

/* [ - - - - - RENDER PAGE ( Menu ) - - - - - ] */
router.post('/mainPage', (req, res, next) => {mainPage(req, res);});
router.post('/listCurator', (req, res, next) => {listCurators(req, res);});
router.post('/listTeacher', (req, res, next) => {listTeacher(req, res);});
router.post('/listStudentsAdmin', (req, res, next) => {listStudentsAdmin(req, res);});
router.post('/listProfilesAdmin', (req, res, next) => {listProfilesAdmin(req, res);});
router.post('/addCurator', (req, res, next) => {addCurator(req, res);});
router.post('/addProfileAdmin', (req, res, next) => {addProfileAdmin(req, res);});

/*
 ____                    __   _   _
|  _ \   _ __    ___    / _| (_) | |   ___
| |_) | | '__|  / _ \  | |_  | | | |  / _ \
|  __/  | |    | (_) | |  _| | | | | |  __/
|_|     |_|     \___/  |_|   |_| |_|  \___|

 */

router.get('/profileInfo/*/editCurator', (req, res, next) => {get_profileEditCurator(req, res);});
router.get('/profileInfo/*/command', (req, res, next) => {get_profileCommand(req, res);});
router.get('/profileInfo/*/cron', (req, res, next) => {get_profileCron(req, res);});
router.get('/profileInfo/*/sendMessage', (req, res, next) => {get_profileSendMessage(req, res);});
router.get('/profileInfo/*/', (req, res, next) => {get_profilePage(req, res);});
router.post('/showFormConstructorProfile', (req, res, next) => {post_showFormConstructorProfile(req, res);});

module.exports = router;
