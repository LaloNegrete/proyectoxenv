var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  Schema({
  id:Number,
  name:String,
  lastname:String,
  age:Number,
  born: Number,
  death: Number,
  movement: String,
  place_of_birth: String
});

module.exports = mongoose.model('User', UserSchema);
