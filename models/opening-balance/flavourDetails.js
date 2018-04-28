var mongoose = require('mongoose');

// define the schema for our user model
var flavourDetailsSchema = mongoose.Schema({
    date: String,
    tank: String,
    flavour: String,
    quantity: Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('FlavourDetails', flavourDetailsSchema);