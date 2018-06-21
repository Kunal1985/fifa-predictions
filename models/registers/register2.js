var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var register2Schema = mongoose.Schema({
    date: String,
    grapeVariety: String,
    quantity: Number,
    juiceObtained: Number,
    clarificationLoss: Number,
    tankList: [{
        tankNumber: String,
        transferredQty: Number
    }],
    remarks: String,
    verified: Boolean,
    wineryId: String,
    created_at: Long,
    updated_at: Long,
    created_by: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register2', register2Schema);