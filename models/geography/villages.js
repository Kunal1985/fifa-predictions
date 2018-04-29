var mongoose = require('mongoose');

// define the schema for our user model
var villagesSchema = mongoose.Schema({
    sNo: Number,
    villageCode: Number,
    villageVersion: Number,
    villageNameInEnglish: String,
    villageNameInLocal: String,
    subDistrictCode: Number,
    census2001Code: String,
    census2011Code: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Villages', villagesSchema);