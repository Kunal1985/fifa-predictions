var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var brandMasterSchema = mongoose.Schema({
    name: String,
    size: String,
    alcoholPercentage: Number,
    mfgCost: Number,
    exciseDuty: Number,
    salesTax: Number,
    mrp: Number,
    labelAppOrderNo: String,
    mrpApprovalDate: String,
    mrpEffectiveDate: String,
    mrpChangeDate: String,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('BrandMaster', brandMasterSchema);