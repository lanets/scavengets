const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');

//var userService = require('services/user.service');
// routes
//router.post('/authenticate', authenticate);
router.post('/', register);
//router.get('/', getAll);
//router.get('/current', getCurrent);
//router.put('/:_id', update);
//router.delete('/:_id', _delete);

function register(req, res, next) {
   var user = new User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       userName: req.body.userName,
       password: bcrypt.hashSync(req.body.pwd,10),
   });
   user.save(function(err, res){
       if(err){
           return res.status(500).json({
              title: 'An error occured',
               error: err
           });
       }
       res.status(201).json({
           message: 'User created',
           obj: result
       });
   })
}

module.exports = router;

/*
function authenticate(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(401).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
*/

