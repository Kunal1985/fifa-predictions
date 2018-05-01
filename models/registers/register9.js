var mongoose = require('mongoose');

// define the schema for our user model
var register9Schema = mongoose.Schema({
    date: String,
    brandName: String,
    strength: Number,
    batchNumber: String,
    sizeInML: String,
    noOfBottles: Number,
	openingBalance: Number,
	closingBalance: Number,
    remarks: String,
    dispatchType: String,
    partyName:String,
    liscenseType: String,
    dispatchedSize: Number,
    dispatchedBottleQty: Number,
    tpEpNumber: String,
    vendExportFee: Number,
    exciseDuty: Number,
    totalAmount: Number,
    chalanNumber: String,
    chalanDate: String,
    mfgCost: Number,
    approvedMrp: Number,
    closingWineBalance: {
        brandName: String,
        strength: Number,
        batchNumber: String,
        sizeInML: String,
        noOfBottles: Number,
    },
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register9', register9Schema);