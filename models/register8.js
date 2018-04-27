var mongoose = require('mongoose');

// define the schema for our user model
var register8Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    closingBalance: Number,
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register8', register8Schema);