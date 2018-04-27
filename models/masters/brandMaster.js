var mongoose = require('mongoose');

// define the schema for our user model
var brandMasterSchema = mongoose.Schema({
    name: String,
    size: String,
    mfgCost: Number,
    exciseDuty: Number,
    salesTax: Number,
    mrp: Number,
    labelAppOrderNo: String,
    mrpApprovalDate: String,
    mrpEffectiveDate: String,
    mrpChangeDate: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('BrandMaster', brandMasterSchema);