var mongoose = require('mongoose');

// define the schema for our user model
var spiritMasterSchema = mongoose.Schema({
    name: String,
    desc: String,
    brand: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SpiritMaster', spiritMasterSchema);