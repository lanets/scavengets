/**
 * Created by Jean-Michel Coupal
 * Copyright Lan ETS
 */
const async = require('async')
const jwt = require('jsonwebtoken')

// Function to intercept, decode token and list parameters in the request
var decodeToken = function (req, res, next) {
  var isUser = req.path.includes('/user')
  var isAuth = req.path.includes('/auth/')
  async.waterfall([
    function validateURL (done) {
      if (req.headers.token && isUser) {
        done(null)
      } else if (!req.headers.token && !isAuth) {
        res.sendStatus(401)
      } else if (isAuth) {
        next()
      }
    },
    function verifyToken (done) {
      // JWT options
      var options = {
        algorithm: 'HS512'
      }
      jwt.verify(req.headers.token, 'jwtSecret', options, function (err, decoded) {
        if (err) {
          // logError(err)
          res.status(401).json({
            success: false,
            message: 'Token Invalid'
          })
        } else {
          // Token is valid
          req.token = decoded // attach the decoded token to the request
          next()
        }
      })
    }], function onError (err) {
    res.status(401).json({ message: err, success: false })
  })
}

module.exports = {
  decode: decodeToken
}
