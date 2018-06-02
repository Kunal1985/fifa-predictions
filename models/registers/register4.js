var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register4Schema = mongoose.Schema({
    date: String,
    fermentedWine: {
        tankNumber: String,
        openingBalance: Number,
        quantity: Number,
        closingBalance: Number
    },
    spirit: {
        tankNumber: String,
        openingBalance: Number,
        strength: Number,
        quantity: Number,
        closingBalance: Number
    },
    fortifiedWine: {
        tankNumber: String,
        quantity: Number,
        alcoholPercentage: Number,
        closingBalance: Number,
        fortificationLoss: Number
    },
    remarks: String,
    verified: Boolean,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register4', register4Schema);