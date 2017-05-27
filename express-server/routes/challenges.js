var express = require('express');
var router = express.Router();
var Challenge = require('../models/challenge');

/* GET all challenges. */
router.get('/challenges', (req, res) => {
    Challenge.find({}, (err, challenges) => {
        if (err) res.status(500).send(error)

        res.status(200).json(challenges);
    });
});

/* GET one challenge. */
router.get('/challenges/:id', (req, res) => {
    Challenge.findById(req.param.id, (err, challenges) => {
        if (err) res.status(500).send(error)

        res.status(200).json(challenges);
    });
});

/* Create a challenge. */
router.post('/', (req, res) => {
    var challenge = new Challenge({
        content: req.body.content
    });

    challenge.save(function(err, res){
       if (err){
           return res.status(500).json({
               title: 'An error occured',
               error: err
           });
       }
       res.status(201).json({
           message: 'Saved message',
           obj: result
       });
    });
});

module.exports = router;
