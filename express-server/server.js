var config = require('./config');
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var swaggerUi = require('swagger-ui-express');
// var expressSession = require('express-session');
var authModule = require('./modules/authModule');

var app = express();

app.set('port', config.port);

// Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.dbHost);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Headers', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
  // Check if preflight request
  if (req.method === 'OPTIONS') {
      res.status(200);
      res.end();
  }
  else {
      // Pass to next layer of middleware
      next();
  }
});
// Make sure the user is authenticate and has access to the request page
app.use(authModule.decode);

// Set our api routes
app.use('/api/v1/user', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/team', require('./routes/teams'));
//app.use('/api/v1/challenge', require('./routes/challenges'));
app.use('/', require('./routes/api'));

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(config.swaggerJs));


// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(config.port, console.log('API running on localhost:' + config.port));
