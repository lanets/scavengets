const express = require('express');
const auth = express.Router();
const authController = require('../controller/auth.controller');

auth.post('/register', authController.register);
auth.post('/signin', authController.authenticate);


module.exports = auth;
