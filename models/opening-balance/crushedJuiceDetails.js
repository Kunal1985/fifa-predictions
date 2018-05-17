var mongoose = require('mongoose');

// define the schema for our user model
var crushedJuiceDeatilsSchema = mongoose.Schema({
    date: String,
    tank: String,
    grapeVariety: String,
    quantity: Number,
    verified: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('CrushedJuiceDetails', crushedJuiceDeatilsSchema);