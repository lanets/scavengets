// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Challenge = require('../models/challenge');
const Team = require('../models/team');

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works, but i don\'t know how security works');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

/* GET all challenges. */
router.get('/challenges', (req, res) => {
    Challenge.find({}, (err, challenges) => {
        if (err) res.status(500).send(error)

        res.status(200).json(challenges);
    });
});

/* GET one users. */
router.get('/challenges/:id', (req, res) => {
    Challenge.findById(req.param.id, (err, challenges) => {
        if (err) res.status(500).send(error)

        res.status(200).json(challenges);
    });
});

/* Create a user. */
router.post('/challenges', (req, res) => {
    let challenge = new Challenge({
        title: req.body.title,
        description: req.body.description,
        points: req.body.points,
    });

    challenge.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Challenge created successfully'
        });
    });
});

module.exports = router;
