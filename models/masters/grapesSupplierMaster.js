var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var grapesSupplierMasterSchema = mongoose.Schema({
    supplierName: String,
    state: String,
    district: Number,
    taluka: String,
    village: String,
    gatNumber: String,
    contactNumber: Number,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('GrapesSupplierMaster', grapesSupplierMasterSchema);