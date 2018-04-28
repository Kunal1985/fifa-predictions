var mongoose = require('mongoose');

// define the schema for our user model
var labelledDetailsSchema = mongoose.Schema({
    date: String,
    type: String,
    bottleSize: String,
    quantity: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('LabelledDetails', labelledDetailsSchema);