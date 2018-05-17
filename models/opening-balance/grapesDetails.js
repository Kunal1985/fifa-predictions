var mongoose = require('mongoose');

// define the schema for our user model
var grapesDetailsSchema = mongoose.Schema({
    date: String,
    variety: String,
    quantity: Number,
    verified: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('GrapesDetails', grapesDetailsSchema);