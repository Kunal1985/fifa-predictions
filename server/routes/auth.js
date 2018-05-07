module.exports = function(app, passport) {
  /**
   * POST /register
   * User Register
   */
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect : '/home', 
    failureRedirect : '/'
  }));
  
  /**
   * POST /login
   * User Log-In
   */
  app.post('/login', passport.authenticate('local-login', { 
    successRedirect: '/home',
    failureRedirect: '/' 
  }), function(req, res, next) {
    res.json({loginSuccess: true});
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
      // User.findOne({username: currPassport.user}, function(err, doc) {
      //   if (err) { throw err; }
      //   console.log("User found!");
      //   res.json(doc);
      // });
    } else{
      throw new Error("Not Logged In");
    }
  });
}