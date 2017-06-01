const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const jwtSecret = 'secret' // to be changed to a real secret in prod

// routes
router.post('/', register);
router.post('/signin', authenticate);
router.get('/', getUsersList);
router.get('/:username', getUser);
// router.put('/:_id', update);
// router.delete('/:_id', _delete);

/**
 * @swagger
 * /user:
 *   get:
 *     description: Returns users list
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 *         schema:
 *           type: array
 *         examples:
 *           application/json: {
 *             "2412412": [
 *               "username": "caflamand",
 *               "firstname": "Rose",
 *               "lastname": "Lamant"
 *             ],
 *             "89732523": [
 *               "username": "bacon",
 *               "firstname": "Laurent",
 *               "lastname": "Tremblay"
 *             ]
 *           }
 *       409:
 *         description: Access forbidden
 */
function getUsersList(req, res, next) {
    User.find({}, function(err, users) {
        var usersList = {};

        users.forEach(function(user) {
            usersList[user._id] = [
                {"username": user.userName},
                {"firstname": user.firstName},
                {"lastname": user.lastName}
            ];
        });

        return res.send(usersList);
    });
}

/**
 * @swagger
 * /user/{username}:
 *   get:
 *     description: Returns a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: user description
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: user
 *         schema:
 *           type: array
 *         examples:
 *           application/json: {
 *             "2412412": [
 *               "username": "caflamand",
 *               "firstname": "Rose",
 *               "lastname": "Lamant"
 *             ]
 *           }
 *       409:
 *         description: Access forbidden
 */
function getUser(req, res, next) {
    User.findOne({userName: req.params.username}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if (!user) {
            return res.status(404).json({
                title: 'no user found',
                error: {message: 'user could not be found'}
            })
        }

        return res.status(200).json({
            "username": user.userName,
            "firstname": user.firstName,
            "lastname": user.lastName
        })
    });
}

function register (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
    });

    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        })
    })
}

function authenticate (req, res, next) {
    User.findOne({userName: req.body.userName}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({
                title: 'no user found', // temporary for debugging
                error: {message: 'user could not be found'}
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            })
        }
        // expiresIn in seconds, so currently set for 2 hours
        var token = jwt.sign({user: user}, 'jwtSecret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        })
    })
}


module.exports = router;

/*
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
