const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./Post');

const CitySchema = new Schema ({
    city_name: String,
    country: String,
    photo: String,
    posts: {
		type: Schema.Types.ObjectId,
		ref: 'Posts'
	}
})

const City = mongoose.model('City', CitySchema);
module.exports = City;