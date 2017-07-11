var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    points: {type: Number, required: true},
    users: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    captain: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Team', schema);