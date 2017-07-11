const express = require('express');
const router = express.Router();
const teamController = require('../controller/team.controller');

router.post('/register', teamController.registerTeam);
//router.post('/join', teamController.joinTeam);


module.exports = router;
