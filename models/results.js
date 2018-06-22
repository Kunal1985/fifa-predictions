var mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var Long = mongoose.Schema.Types.Long;

// Define the schema and model for our Results model
var resultsSchema = mongoose.Schema({
    team1: String,
    team2: String,
    goal1: String,
    goal2: String,
    created_at: Long,
    updated_at: Long
});
module.exports = mongoose.model('results', resultsSchema);