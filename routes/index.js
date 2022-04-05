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
// FUNCTION


/* [ - - - - - LOGIN - - - - - ] */
router.get('/', (req, res, next) => {get_login(req, res);});
router.post('/login', (req, res, next) => {post_login(req, res);});

router.get('/profile', (req, res, next) => {get_profile(req, res);});

/* [ - - - - - LOGOUT - - - - - ] */
router.get('/logout', (req, res, next) => {get_logout(req, res, next)});

module.exports = router;
