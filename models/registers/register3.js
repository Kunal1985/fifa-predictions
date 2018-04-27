var mongoose = require('mongoose');

// define the schema for our user model
var register3Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    rackingLoss: Number,
    baseWineObtained: Number,
    transferredQty: Number,
    closingBalance: Number,
    transferLoss: Number,
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register3', register3Schema);