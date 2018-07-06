const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const User = require('./User' );

const PostSchema = new Schema ({
	city_id: String,
    title: String,
    review: String,
    post_photo: String,
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
