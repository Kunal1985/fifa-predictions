var mongoose = require('mongoose');

// define the schema for our user model
var register8Schema = mongoose.Schema({
    date: String,
    openingBalance: {
        sizeInML: String,
        wineType: String
    },
    sizeInML: String,
    noOfBottles: Number,
    bottlesReceived: {
        unitName: String,
        tpNo: String,
        sizeInML: String,
        noOfBottles: String
    },
    transferType: String,
    labelling: {
        brandName: String,
        strength: String,
        batchNo: String,
        mfgDate: String,
        sizeinML: String,
        noOfBottles: String
    },
    transferred: {
        unitName: String,
        tpNo: String,
        sizeinMl: String,
        noOfBottles: String,
        vendFee: String
    },
    sampling: {
        sizeinMl: String,
        noOfBottles: String
    },
    breakages: {
        sizeinMl: String,
        noOfBottles: String
    },
    closingBalance: {
        sizeinMl: String,
        noOfBottles: String
    },
    remarks: String,
    verified: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register8', register8Schema);