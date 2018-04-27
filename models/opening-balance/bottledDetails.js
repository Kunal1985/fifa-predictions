var mongoose = require('mongoose');

// define the schema for our user model
var bottledSchema = mongoose.Schema({
    date: String,
    type: String,
    bottleSize: Number,
    quantity: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('BottledDetails', bottledSchema);