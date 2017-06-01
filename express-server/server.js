var config = require('./config');

var express = require('express'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    http = require('http'),
    swaggerUi = require('swagger-ui-express');


var app = express();

app.set('port', config.port);

// Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(config.dbHost);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next()
});

// Get our API routes
var routes = {
    api : require('./routes/api'),
    user : require('./routes/users'),
    challenges : require('./routes/challenges')
};

// Set our api routes
app.use('/user', routes.user);
app.use('/challenge', routes.challenges);
app.use('/', routes.api);

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(config.swaggerJs, false));

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(config.port, () => console.log(`API running on localhost:${config.port}`));
