var mongoose = require('mongoose');

// define the schema for our user model
var register5Schema = mongoose.Schema({
    date: String,
    tankNumber: String,
    openingBalance: Number,
    wineType: String,
    bottleSize: String,
    bottleQty: Number,
	qtyInLitres: Number,
	bottlingLoss: Number,
	closingBalance: Number,
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register5', register5Schema);