var mongoose = require('mongoose');

// define the schema for our user model
var register5Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    closingBalance: Number,
    trasnferType: String,
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
    closingBalance: Number,
    remarks:String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register5', register5Schema);