var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register1Schema = mongoose.Schema({
    dateOfReceipt: String,
    supplierName: String,
    qtyCrushed: Number,
    qtyReceived: Number,
    grapeVariety: String,
    yield: String,
    remarks: String,
    verified: Boolean,
    wineryId: String,
    tankNumber: Number,
    qtyBulkLts: Number,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register1', register1Schema);