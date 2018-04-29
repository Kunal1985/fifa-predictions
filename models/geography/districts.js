var mongoose = require('mongoose');

// define the schema for our user model
var districtsSchema = mongoose.Schema({
    sNo: Number,
    districtCode: Number,
    districtVersion: Number,
    districtNameInEnglish: String,
    districtNameInLocal: String,
    stateCode: Number,
    census2001Code: String,
    census2011Code: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Districts', districtsSchema);