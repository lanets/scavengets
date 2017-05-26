var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    idKey: {type: String, required:true},
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    points: {type: Number, required: true},
});

module.exports = mongoose.model('Team', schema);