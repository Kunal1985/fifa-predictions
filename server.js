// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var User = require('./models/user');


var config = require('./config');
var routes = require('./app/routes');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Passport related imports
require('./server/passport')(passport);
require('./server/routes/auth')(app, passport);

// Server-side Routes for Registers 
require('./server/routes/registers/register1')(app, passport);
require('./server/routes/registers/register2')(app, passport);
require('./server/routes/registers/register3')(app, passport);
require('./server/routes/registers/register4')(app, passport);
require('./server/routes/registers/register5')(app, passport);
require('./server/routes/registers/register6')(app, passport);
require('./server/routes/registers/register7')(app, passport);
require('./server/routes/registers/register8')(app, passport);
require('./server/routes/registers/register9')(app, passport);

// Server-side Routes for Masters
require('./server/routes/masters/brand')(app, passport);
require('./server/routes/masters/flavour')(app, passport);
require('./server/routes/masters/grape-variety')(app, passport);
require('./server/routes/masters/spirit')(app, passport);
require('./server/routes/masters/tank')(app, passport);
require('./server/routes/masters/wine-type')(app, passport);

// Server-side Routes for Geography
require('./server/routes/geography')(app, passport);

app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var currPassport = req.session.passport;
  if(!currPassport && req.url != "/"){
    res.redirect("/");
  } else{
    if(currPassport && req.url === "/"){
      res.redirect("/home");
    } else {
      Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        console.log("Inside2", req.url);
        if (err) {
          res.status(500).send(err.message)
        } else if (redirectLocation) {
          res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
          var page = swig.renderFile('views/index.html', { html: html });
          res.set('passport-value', currPassport);
          res.status(200).send(page);
        } else {
          res.status(404).send('Page Not Found')
        }
      });
    }
  }
});

app.use(function(err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
