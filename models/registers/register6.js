var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register6Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    wineVariety: String,
    openingBalance: Number,
    wineType: String,
    brandName: String,
    bottleSize: String,
    bottleQty: Number,
    qtyInLitres: Number,
    bottlingLoss: Number,
    closingBalance: Number,
    batchNumber: String,
    remarks: String,
    verified: Boolean,
    wineryId: String,
    vintage: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register6', register6Schema);