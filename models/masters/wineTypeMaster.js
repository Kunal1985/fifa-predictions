var mongoose = require('mongoose');

// define the schema for our user model
var wineTypeMasterSchema = mongoose.Schema({
    name: String,
    desc: String,
    wineryId: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('WineTypeMaster', wineTypeMasterSchema);