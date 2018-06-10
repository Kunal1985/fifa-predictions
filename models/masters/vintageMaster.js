var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// define the schema for our user model
var vintageMasterSchema = mongoose.Schema({
    harvestYear: String,
    variety: String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('VintageMaster', vintageMasterSchema);