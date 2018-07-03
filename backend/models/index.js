var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-wayfarer');

var CityModel = require('./City');
var PostModel = require('./Post');
var UserModel = require('./User');

  module.exports = {
    City: CityModel,
    Post: PostModel,
    User: UserModel
  }