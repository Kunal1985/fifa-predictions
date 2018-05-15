var mongoose = require('mongoose');

// define the schema for our user model
var exciseOfficerSchema = mongoose.Schema({
    name: String,
    officeName: String,
    post: String,
    email: String,
    telephoneNumber: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('ExciseOfficer', exciseOfficerSchema);