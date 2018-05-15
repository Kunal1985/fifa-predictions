var mongoose = require('mongoose');

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

// create the model for users and expose it to our app
module.exports = mongoose.model('WineryUser', wineryUserSchema);