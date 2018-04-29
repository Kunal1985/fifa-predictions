var mongoose = require('mongoose');

// define the schema for our user model
var statesSchema = mongoose.Schema({
    sNo: Number,
    stateCode: Number,
    stateVersion: Number,
    stateNameInEnglish: String,
    stateNameInLocal: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('States', statesSchema);