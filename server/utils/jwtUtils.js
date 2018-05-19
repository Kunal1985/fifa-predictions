const jwt = require('jsonwebtoken');
const jwtSecret = 'zingpong@26';

module.exports.verifyToken = function(token) {
  // console.log("verifyToken", token)
  token = token.replace("Bearer ", "");
  return jwt.verify(token, jwtSecret, function(err, user) {
    if(err) throw err;
    return user;
  });
}

module.exports.generateToken = function(user) {
  var userObjForJwt = {
    username: user.username,
    role: user.role
   };
   return jwt.sign(userObjForJwt, jwtSecret, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
   });
}

module.exports.cleanUser = function(currPassport){
  var currUser = currPassport.user;
  return {
    username: currUser.username,
    role: currUser.role
  };
}