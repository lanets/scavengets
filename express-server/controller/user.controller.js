const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secrets = require('../config/secrets');
// const jwtSecret = 'secret' // to be changed to a real secret in prod

module.exports = {

    /**
     * [getUsersList -- get All the users registered]
     * @param  req
     * @param  res
     * @return Void
     */
    getUsersList: function (req, res, next) {
        User.find({}, function (err, users) {
            var usersList = {};
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            users.forEach(function (user) {
                usersList[user._id] = [
                    {'username': user.userName},
                    {'firstname': user.firstName},
                    {'lastname': user.lastName}
                ]
            });

            return res.send(usersList)
        })
    },

    /**
     * [getUser -- get user by username]
     * @param  req
     * @param  res
     * @return Void
     */
    getUser: function (req, res, next) {
        User.findById(req.params._id, function (err, user) {
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
                'username': user.userName,
                'firstname': user.firstName,
                'lastname': user.lastName
            })
        })
    },
    updateUser: function (req, res, next) {
      User.update({_id: req.params._id}, req.body, function (err, user) {
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

          return res.status(200).json(req.body)
      })
    }
}
