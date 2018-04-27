var mongoose = require('mongoose');

// define the schema for our user model
var register7Schema = mongoose.Schema({
    date: String,
    ownUnit: {
        sizeInML: Number,
        bottlesQty: Number
    },
    otherUnit: {
        name: String,
        address: String,
        tpEpNumber: String,
        size: Number,
        bottlesQty: Number,
        vendFee: Number,
        exciseDuty: Number,
        specialFee: Number,
        liscenseType: String
    },
    disgorgingLoss: {
        bottlesQty: Number,
        quantity: Number
    },
    closingBalanceDisgorged: {
        sizeInML: Number,
        bottlesQty: Number,
    },
    closingBalanceTirage: {
        bottleSize: String,
        bottlesQty: Number,
        loss: Number
    },
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register7', register7Schema);