const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secrets = require('../config/secrets');



module.exports = {

    /**
     * [register -- register new user]
     * @param  req
     * @param  res
     * @return Void
     */
    register: function (req, res, next) {
        // find a user in Mongo with provided username
        User.findOne({userName: req.body.userName}, function (err, user) {
            // In case of any error return
            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }
            // already exists
            if (user) {
                console.log('User already exists');
                return done(null, false,
                    req.flash('message', 'User Already Exists'));
            } else {
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
        });
    },

    /**
     * [authenticate -- authenticate registered user]
     * @param  req
     * @param  res
     * @return Void
     */
    authenticate: function (req, res, next) {
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
            var payload = {
              uid: user._id,
              loa: 3, // User's level of access
              name: user.firstName + ' ' + user.lastName,
              username: user.userName
            }
            var token = jwt.sign(payload, 'jwtSecret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id
            })
        })
    }
}
