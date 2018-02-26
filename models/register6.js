var mongoose = require('mongoose');

// define the schema for our user model
var register6Schema = mongoose.Schema({
    date: String,
    openingBalance: {
        sizeInML: Number,
        bottlesQty: Number
    },
    wineReceived: {
        sizeInML: Number,
        bottlesQty: Number
    },
    totalWineAvailable: {
        sizeInML: Number,
        bottlesQty: Number
    },
    issuedForDisgorging: {
        tankNumber: String,
        sizeInML: Number,
        bottlesQty: Number,
        openingBalance: Number
    },
    wineBottled: {
        wineType: String,
        bottleSize: String,
        bottlesQty: Number,
        quantity: Number
    },
    labelling: {
        type: String,
        bottleSize: Number,
        bottlesQty: Number
    },
    wineType: String,
    bottleSize: Number,
    bottlesQty: Number,
    disgorgingLoss: Number,
    dbClosingBalance: Number,
    tbClosingBalance: Number,
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register6', register6Schema);