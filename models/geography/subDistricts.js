var mongoose = require('mongoose');

// define the schema for our user model
var subDistrictsSchema = mongoose.Schema({
    sNo: Number,
    subDistrictCode: Number,
    subDistrictVersion: Number,
    subDistrictNameInEnglish: String,
    subDistrictNameInLocal: String,
    districtCode: Number,
    census2001Code: String,
    census2011Code: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SubDistricts', subDistrictsSchema);