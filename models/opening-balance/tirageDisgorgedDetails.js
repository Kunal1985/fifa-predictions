var mongoose = require('mongoose');

// define the schema for our user model
var tirageDisgorgedDetailsSchema = mongoose.Schema({
    date: String,
    tankNumber: String,
    spiritType: String,
    quantity: Number,
    verified: Boolean,
    wineryId: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('TirageDisgorgedDetails', tirageDisgorgedDetailsSchema);