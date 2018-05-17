var mongoose = require('mongoose');

// define the schema for our user model
var fermentedDetailsSchema = mongoose.Schema({
    date: String,
    tank: String,
    quantity: Number,
    verified: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('FermentedDetails', fermentedDetailsSchema);