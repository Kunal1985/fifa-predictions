var mongoose = require('mongoose');

// define the schema for our user model
var register4Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    bulkPurchase: {
        txnType: Number,
        partyName: String,
        partyAddress: String,
        tpepNumber: Number,
        qtyInLitres: Number,
        importFeePaid: Number,
        vendFeePaid: Number,
        exciseFeePaid: Number,
        specialFeePaid: Number,
        losses: Number,
        closingBalance: Number
    },
    bulkSale: {
        txnType: Number,
        partyName: String,
        licenseType: String,
        tpepNumber: Number,
        qtyInLitres: Number,
        exportFeePaid: Number,
        vendFeePaid: Number,
        exciseFeePaid: Number,
        specialFeePaid: Number,
        losses: Number,
        remarks: String
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register4', register4Schema);