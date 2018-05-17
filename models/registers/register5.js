var mongoose = require('mongoose');

// define the schema for our user model
var register5Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    closingBalance: Number,
    transferType: String,
    ownUnit: {
        tankNumber: Number,
        openingBalance: Number,
        wineVariety: String,
        quantityIssued: Number,
        quantityReceived: Number,
        loss: Number
    },
    otherUnit: {
        bulkTransactionType: String,
        partyName: String,
        partyAddress: String,
        tpepipNumber: Number,
        liscenseType: String,
        wineVariety: String,
        qtyInLitres: Number,
        importExportFeePaid: Number,
        vendFeePaid: Number,
        exciseDutyPaid: Number,
        specialFeePaid: Number,
        losses: Number
    },
    remarks:String,
    verified: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register5', register5Schema);