var mongoose = require('mongoose');

// define the schema for our user model
var register2Schema = mongoose.Schema({
    date: String,
    grapeVariety: String,
    quantity: Number,
    juiceObtained: Number,
    tankNumber: String,
    clarificationLoss: String,
    remarks: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Register2', register2Schema);