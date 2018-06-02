var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register7Schema = mongoose.Schema({
    date: String,
    disgorgingType: String,
    ownUnit: {
        sizeInML: String,
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
    remarks: String,
    verified: Boolean,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register7', register7Schema);