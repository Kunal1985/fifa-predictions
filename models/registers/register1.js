var mongoose = require('mongoose');

// define the schema for our user model
var register1Schema = mongoose.Schema({
    dateOfReceipt: String,
    supplierName: String,
    qtyCrushed: Number,
    qtyReceived: Number,
    state: String,
    district: String,
    taluka: String,
    village: String,
    gatNumber: String,
    grapeVariety: String,
    remarks: String,
    verified: Boolean,
    wineryId: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register1', register1Schema);