const express = require('express');
const Team = require('../models/team');


module.exports = {

  /**
   * [register -- register new Team]
   * @param  req
   * @param  res
   * @return Void
   */
  registerTeam: function (req, res, next) {
    Team.findOne({name: req.body.name}, function (err, team) {
      // In case of any error return
      if (err) {
        console.log('Error in Team Registration: ' + err);
        return done(err);
      }
      // already exists
      if (team) {
        console.log('Team already exists');
        return done(null, false,
            req.flash('message', 'Team Already Exists'));
      } else {
        var currentUser = req.body.captain;
        var teamData = {name: req.body.name, points: req.body.points, users: req.body.users, captain: req.body.captain};
        console.log('teamData:' + teamData);
        var team = new Team(teamData);
        console.log('team var: ' + team);

        team.save(function (err, result) {
          if (err) {
            console.log(err);
            return res.status(500).json({
              title: 'An error occured',
              error: err
            })
          }
          res.status(201).json({
            message: 'Team created',
            obj: result
          })
        })
      }
    });
  }

}