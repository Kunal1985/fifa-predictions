var mongoose = require('mongoose');
var User = require('../user');

// define the schema for our user model
var wineryUserSchema = mongoose.Schema({
    name: String,
    liscenceNumber: String,
    authorizedOfficer: String,
    ownerName: String,
    email: String,
    telephoneNumber: Number,
    state: String,
    district: String,
    taluka: String,
    village: String,
    gatNumber: String
});

wineryUserSchema.pre('save', function (next) {
    console.log("Pre save", this);
    var username = this.email;
    var newUser = new User();
    newUser.username = username;
    newUser.role = 1;
    newUser.password = newUser.generateHash("abcd1234");
    User.findOne({ 'username' :  username }, function(err, user) {
        if (err)
            next(err);
        if (user) {
            return next(new Error(`The username '${username}' is already taken.`));
        } else {
            newUser.save(function(err) {
                if (err)
                    next(err);
                next();
            });
        }    
    });
});

// create the model for users and expose it to our app
module.exports = mongoose.model('WineryUser', wineryUserSchema);