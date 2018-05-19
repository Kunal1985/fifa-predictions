import User from '../../models/user';
import { generateToken, cleanUser } from '../utils/jwtUtils';

module.exports = function(app, passport) {
  /**
   * POST /register
   * User Register
   */
  app.post('/register', passport.authenticate('local-signup', {
    failureRedirect : '/'
  }), function(req, res, next) {
    var currPassport = req.session.passport;
    console.log("Passport during Register", currPassport);
    var jwtToken = generateToken(currPassport);
    res.json({registerSuccess: true, redirectUrl: "/admin", currUser: cleanUser(currPassport), token: jwtToken});
  });
  
  /**
   * POST /login
   * User Log-In
   */
  app.post('/login', passport.authenticate('local-login', { 
    failureRedirect: '/' 
  }), function(req, res, next) {
    var currPassport = req.session.passport;
    console.log("Passport during Login", currPassport);    
    var jwtToken = generateToken(currPassport);
    var redirectUrl = "/home";
    switch(currPassport.user.role){
      case 2: redirectUrl = "openingBalance";break;
      case 0: redirectUrl = "admin"; break;
      default: break;
    }
    res.json({loginSuccess: true, redirectUrl: redirectUrl, currUser: cleanUser(currPassport), token: jwtToken});
    // User.findById(currPassport.user, function(err, user) {
    //   if (err) { throw err; }
    //   var redirectUrl = "/home";
    //   switch(user.role){
    //     case 2: redirectUrl = "openingBalance";break;
    //     case 0: redirectUrl = "admin"; break;
    //     default: break;
    //   }
    //   res.json({loginSuccess: true, redirectUrl: redirectUrl});
    // });
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
   * POST /userDetails
   * Logged-In User details
   */
  app.get('/userDetails', function(req, res, next) {
    var currPassport = req.session.passport;
    if(currPassport){
      console.log("userDetails", currPassport);
      res.json(currPassport.user);
      // User.findById(currPassport.user, function(err, user) {
      //   if (err) { throw err; }
      //   console.log("User found!");
      //   res.json(user);
      // });
    } else{
      throw new Error("Unauthenticated Access!");
    }
  });
}