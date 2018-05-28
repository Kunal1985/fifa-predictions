var mongoose = require('mongoose');

// define the schema for our user model
var tankMasterSchema = mongoose.Schema({
    number: String,
    type: String,
    capacity: Number,
    gugingDate: String,
    installationDate: String,
    balance: Number,
    wineryId: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('TankMaster', tankMasterSchema);