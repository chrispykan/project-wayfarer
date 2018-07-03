var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/3090");

module.exports.Post = require('./post.js');
module.exports.User = require('./user.js');
module.exports.City = require('./city.js');