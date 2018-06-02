var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var tankMasterSchema = mongoose.Schema({
    number: String,
    type: String,
    capacity: Number,
    gugingDate: String,
    installationDate: String,
    balance: Number,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('TankMaster', tankMasterSchema);