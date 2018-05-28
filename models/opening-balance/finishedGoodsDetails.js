var mongoose = require('mongoose');

// define the schema for our user model
var finishedGoodsDetailsSchema = mongoose.Schema({
    date: String,
    type: String,
    bottleSize: String,
    quantity: Number,
    verified: Boolean,
    wineryId: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('FinishedGoodsDetails', finishedGoodsDetailsSchema);