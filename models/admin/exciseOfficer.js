var mongoose = require('mongoose');
var User = require('../user');

// define the schema for our user model
var exciseOfficerSchema = mongoose.Schema({
    name: String,
    officeName: String,
    post: String,
    email: String,
    telephoneNumber: Number,
    officerType: Number
});

exciseOfficerSchema.pre('save', function (next) {
    console.log("Pre save", this);
    var username = this.email;
    var newUser = new User();
    newUser.username = username;
    newUser.role = 2;
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
module.exports = mongoose.model('ExciseOfficer', exciseOfficerSchema);