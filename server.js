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
var Register1 = require('./models/registers/register1');
var Register2 = require('./models/registers/register2');
var Register3 = require('./models/registers/register3');
var Register4 = require('./models/registers/register4');
var Register5 = require('./models/registers/register5');
var Register6 = require('./models/registers/register6');
var Register7 = require('./models/registers/register7');
var Register8 = require('./models/registers/register8');
var Register9 = require('./models/registers/register9');
var TankMaster = require('./models/masters/tankMaster');
var WineTypeMaster = require('./models/masters/wineTypeMaster');
var GrapeVarietyMaster = require('./models/masters/grapeVarietyMaster');
var BrandMaster = require('./models/masters/brandMaster');
var FlavourMaster = require('./models/masters/flavourMaster');
var SpiritMaster = require('./models/masters/spiritMaster');
var FlavourdDetails = require('./models/opening-balance/flavourDetails');
var SpiritDetails = require('./models/opening-balance/spiritDetails');
var GrapesDetails = require('./models/opening-balance/grapesDetails');
var CrushedJuiceDetails = require('./models/opening-balance/crushedJuiceDetails');
var FermentedDetails = require('./models/opening-balance/fermentedDetails');
var BottledDetails = require('./models/opening-balance/bottledDetails');
var TirageDisgorgedDetails = require('./models/opening-balance/tirageDisgorgedDetails');
var LabelledDetails = require('./models/opening-balance/labelledDetails');

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username, password);
    var user = {};
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
  var currPassport = req.session.passport;
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

/**
 * POST /upsertRegister1
 * Upsert Register1
 */
app.post('/upsertRegister1', function(req, res, next) {
  upsertRecord(req, res, next, "Register1");
});

/**
 * GET /getRegister1
 * Get Register1
 */
app.get('/getRegister1', function(req, res, next) {
  getAllRecords(req, res, next, "Register1");
});

/**
 * GET /getRegister1Record
 * Get Register1 Record
 */
app.post('/getRegister1Record', function(req, res, next) {
  getRecordById(req, res, next, "Register1");
});

/**
 * POST /upsertRegister2
 * Upsert Register2
 */
app.post('/upsertRegister2', function(req, res, next) {
  upsertRecord(req, res, next, "Register2");
});

/**
 * GET /getRegister2
 * Get Register2
 */
app.get('/getRegister2', function(req, res, next) {
  getAllRecords(req, res, next, "Register2");
});

/**
 * GET /getRegister2Record
 * Get Register2 Record
 */
app.post('/getRegister2Record', function(req, res, next) {
  getRecordById(req, res, next, "Register2");
});

/**
 * POST /upsertRegister3
 * Upsert Register3
 */
app.post('/upsertRegister3', function(req, res, next) {
  upsertRecord(req, res, next, "Register3");
});

/**
 * GET /getRegister3
 * Get Register3
 */
app.get('/getRegister3', function(req, res, next) {
  getAllRecords(req, res, next, "Register3");
});

/**
 * GET /getRegister3Record
 * Get Register3 Record
 */
app.post('/getRegister3Record', function(req, res, next) {
  getRecordById(req, res, next, "Register3");
});

/**
 * POST /upsertRegister4
 * Upsert Register4
 */
app.post('/upsertRegister4', function(req, res, next) {
  upsertRecord(req, res, next, "Register4");
});

/**
 * GET /getRegister4
 * Get Register4
 */
app.get('/getRegister4', function(req, res, next) {
  getAllRecords(req, res, next, "Register4");
});

/**
 * GET /getRegister4Record
 * Get Register4 Record
 */
app.post('/getRegister4Record', function(req, res, next) {
  getRecordById(req, res, next, "Register4");
});

/**
 * POST /upsertRegister5
 * Upsert Register5
 */
app.post('/upsertRegister5', function(req, res, next) {
  upsertRecord(req, res, next, "Register5");
});

/**
 * GET /getRegister5
 * Get Register5
 */
app.get('/getRegister5', function(req, res, next) {
  getAllRecords(req, res, next, "Register5");
});

/**
 * GET /getRegister5Record
 * Get Register5 Record
 */
app.post('/getRegister5Record', function(req, res, next) {
  getRecordById(req, res, next, "Register5");
});

/**
 * POST /upsertRegister6
 * Upsert Register6
 */
app.post('/upsertRegister6', function(req, res, next) {
  upsertRecord(req, res, next, "Register6");
});

/**
 * GET /getRegister6
 * Get Register6
 */
app.get('/getRegister6', function(req, res, next) {
  getAllRecords(req, res, next, "Register6");
});

/**
 * GET /getRegister6Record
 * Get Register6 Record
 */
app.post('/getRegister6Record', function(req, res, next) {
  getRecordById(req, res, next, "Register6");
});

/**
 * POST /upsertRegister7
 * Upsert Register7
 */
app.post('/upsertRegister7', function(req, res, next) {
  upsertRecord(req, res, next, "Register7");
});

/**
 * GET /getRegister7
 * Get Register7
 */
app.get('/getRegister7', function(req, res, next) {
  getAllRecords(req, res, next, "Register7");
});

/**
 * GET /getRegister7Record
 * Get Register7 Record
 */
app.post('/getRegister7Record', function(req, res, next) {
  getRecordById(req, res, next, "Register7");
});

/**
 * POST /upsertRegister8
 * Upsert Register8
 */
app.post('/upsertRegister8', function(req, res, next) {
  upsertRecord(req, res, next, "Register8");
});

/**
 * GET /getRegister8
 * Get Register8
 */
app.get('/getRegister8', function(req, res, next) {
  getAllRecords(req, res, next, "Register8");
});

/**
 * GET /getRegister8Record
 * Get Register8 Record
 */
app.post('/getRegister8Record', function(req, res, next) {
  getRecordById(req, res, next, "Register8");
});

/**
 * POST /upsertRegister9
 * Upsert Register9
 */
app.post('/upsertRegister9', function(req, res, next) {
  upsertRecord(req, res, next, "Register9");
});

/**
 * GET /getRegister9
 * Get Register9
 */
app.get('/getRegister9', function(req, res, next) {
  getAllRecords(req, res, next, "Register9");
});

/**
 * GET /getRegister9Record
 * Get Register9 Record
 */
app.post('/getRegister9Record', function(req, res, next) {
  getRecordById(req, res, next, "Register9");
});

/**
 * Method to upsert Record for a model.
 * 
 */
upsertRecord = function(req, res, next, modelName){
  var data = req.body;
  var currRecordId = data._id;
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("upsertRecord for", modelName, currRecordId);
    if(currRecordId){
      modelObj.update({_id: ObjectId(currRecordId)}, data, function(err, modelRecord) {
        if (err) return next(err);
        console.log("Record Updated for", modelName, modelRecord);
        res.json({ recordUpdated: true });
      });
    } else {
      var modelObjCreated = new modelObj(data);
      modelObjCreated.save(function(err, modelRecord) {
        if (err) return next(err);
        console.log("New Record Created for", modelName, modelRecord);
        res.json({ recordCreated: true });
      });
    }
  } else{
    throw new Error("Model not found!");
  }
} 

/**
 * Method to fetch all records for a model.
 * 
 */
getAllRecords = function(req, res, next, modelName){
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("getAllRecords for", modelName);
    modelObj.find({}, function(err, doc) {
      if (err) { throw err; }
      console.log(doc.length, modelName, "records found");
      res.json(doc);
    });
  } else{
    throw new Error("Model not found!");
  }
} 

/**
 * Method to fetch Record by ID for a model.
 * 
 */
getRecordById = function(req, res, next, modelName){
  var reqBody = req.body;
  var modelObj = getModelObject(modelName);
  if(modelObj){
    console.log("getRecordById for", modelName, reqBody);
    modelObj.findOne({_id: ObjectId(reqBody._id)}, function(err, doc) {
      if (err) { throw err; }
      console.log(modelName, "record found", doc);
      res.json(doc);
    });
  } else{
    throw new Error("Model not found!");
  }
}

/**
 * Method to fetch Record by ID for a model.
 * 
 */
getModelObject = function(modelName){
  var modelObj = null;
  switch(modelName){
    case "Register1": modelObj = Register1; break;
    default: break;
  }
  return modelObj;
}

app.use(function(req, res) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
