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

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username, password);
    let user = {};
    user.username = username;
    user.password = password;
    User.findOne(user, function(err, doc) {
      console.log("User found", err, doc)
      if (err) { return done(err); }
      if (!doc) { return done(new Error("Incorrect combination for username/password!")); }
      return done(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
  console.log("serializeUser", user);
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  console.log("deserializeUser", username);
  User.findOne({username: username}, function(err, doc) {
    if (err) { return done(err); }
    console.log("User found");
    return done(null, doc);
  });
});

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

/**
 * POST /register
 * User Register
 */
app.post('/register', function(req, res, next) {
  console.log("Inside register", req.body);
  var newUser = new User(req.body);
  newUser.save(function(err, newUserCreated) {
    if (err) return next(err);
    console.log("newUserCreated", newUserCreated);
    passport.authenticate('local', (err, user, info) => {
      console.log("User", user);
      if (user) { 
        console.log("UserRegistered", user);
        res.json({userRegistered: true});
      }
    })(req, res, next);
  });
});

/**
 * POST /login
 * User Log-In
 */
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next) {
  res.json({loginSuccess: true});
});

/**
 * POST /userDetails
 * Logged-In User details
 */
app.get('/userDetails', function(req, res, next) {
  let currPassport = req.session.passport;
  if(currPassport){
    console.log("userDetails", currPassport);
    User.findOne({username: currPassport.user}, function(err, doc) {
      if (err) { throw err; }
      console.log("User found");
      res.json(doc);
    });
  } else{
    throw new Error("Not Logged In");
  }
});

/**
 * POST /logout
 * User Log-Out
 */
app.post('/logout', function(req, res, next) {
  req.logout();
  req.session.destroy(function (err) {
    console.log("Session Destroyed!!!");
    res.redirect('/');
  });
});

app.use(function(req, res) {
  if(!req.session.passport && req.url != "/"){
    res.redirect("/");
  } else{
    if(req.session.passport && req.url === "/"){
      res.redirect("/home");
    } else {
      Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
          res.status(500).send(err.message)
        } else if (redirectLocation) {
          res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
          var page = swig.renderFile('views/index.html', { html: html });
          res.set('passport-value', req.session.passport);
          res.status(200).send(page);
        } else {
          res.status(404).send('Page Not Found')
        }
      });
    }
  }
});

app.use(function(err, req, res, next) {
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
