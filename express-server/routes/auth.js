
const express = require('express');
const auth = express.Router();
const secrets = require('../config/secrets');
const authController = require('../controller/auth.controller');

auth.post('/register', authController.register);
auth.post('/signin', authController.authenticate);


module.exports = auth;
