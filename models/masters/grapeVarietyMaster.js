var mongoose = require('mongoose');

// define the schema for our user model
var grapeVarietyMasterSchema = mongoose.Schema({
    name: String,
    desc: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('GrapeVarietyMaster', grapeVarietyMasterSchema);