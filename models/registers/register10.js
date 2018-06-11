var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register10Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    rackingLoss: Number,
    baseWineObtained: Number,
    transferredQty: Number,
    closingBalance: Number,
    transferLoss: Number,
    remarks: String,
    verified: Boolean,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register10', register10Schema);