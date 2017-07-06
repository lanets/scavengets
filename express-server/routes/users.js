const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
// const jwtSecret = 'secret' // to be changed to a real secret in prod

// routes
router.get('/', userController.getUsersList);
router.get('/:_id?', userController.getUser);
//router.get('/', userController.getUsersList);
//router.get('/:username', userController.getUser);
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
