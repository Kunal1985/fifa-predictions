var mongoose = require('mongoose');

// define the schema for our user model
var flavourMasterSchema = mongoose.Schema({
    name: String,
    desc: String,
    uom: Number,
    isCommon: Boolean,
    brand: String,
    isapproved: Boolean
});

// create the model for users and expose it to our app
module.exports = mongoose.model('FlavourMaster', flavourMasterSchema);