var mongoose = require('mongoose');

// define the schema for our user model
var spiritDetailsSchema = mongoose.Schema({
    date: String,
    tankNumber: String,
    spiritType: String,
    quantity: Number,
    strength: String,
    pl: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SpiritDetails', spiritDetailsSchema);