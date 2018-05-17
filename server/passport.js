var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {    
  passport.serializeUser(function(user, done) {
    console.log("Passport serializeUser", user);
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log("Passport deserializeUser", id);
    User.findById(id, function(err, user) {
      done(err, user);
    });
    return done(null, user);
  });

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with username
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  }, function(req, username, password, done) {
    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function() {
      // find a user whose username is the same as the forms username
      // we are checking to see if the user trying to login already exists
      User.findOne({ 'username' :  username }, function(err, user) {
          // if there are any errors, return the error
          if (err)
              return done(err);
  
          // check to see if theres already a user with that username
          if (user) {
              return done(new Error(`The username '${username}' is already taken.`));
          } else {
  
              // if there is no user with that username
              // create the user
              var newUser            = new User();
  
              // set the user's local credentials
              newUser.username    = username;
              newUser.password = newUser.generateHash(password);
  
              // save the user
              newUser.save(function(err) {
                  if (err)
                      throw err;
                  return done(null, newUser);
              });
          }
      });
    });
  }));
  
  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with username
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  }, function(req, username, password, done) { // callback with username and password from our form
  
    // find a user whose username is the same as the forms username
    // we are checking to see if the user trying to login already exists
    User.findOne({ 'username' :  username }, function(err, user) {
      // if there are any errors, return the error before anything else
      if (err)
          return done(err);
  
      // if no user is found, return the message
      if (!user)
          return done(new Error(`No user found with username - ${username}.`));
  
      // if the user is found but the password is wrong
      if (!user.validPassword(password))
          return done(new Error('Oops! Wrong password.'));
  
      // all is well, return successful user
      return done(null, user);
    });
  }));
}