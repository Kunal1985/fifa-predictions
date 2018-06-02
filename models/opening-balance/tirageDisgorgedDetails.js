var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var tirageDisgorgedDetailsSchema = mongoose.Schema({
    date: String,
    tankNumber: String,
    spiritType: String,
    quantity: Number,
    verified: Boolean,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('TirageDisgorgedDetails', tirageDisgorgedDetailsSchema);