const Post = require('../models/Post');
const User = require('../models/User');

function index(req, res){
    console.log('GET posts index')
    Post.find({}, function(err, post){
        if(err){
            res.send(err);
        }
        return res.json(post);
    });
}

function create(req, res){
    console.log('POST post')
	Post.create(req.body, function(err, newPost){
		if(err){
			res.send(err);
		}else{
			newPost.user_id = req.User.user_id;
			newPost.save();
			res.json(newPost);	
		}
	});
}

function show(req, res){
	console.log('GET one post')
	Post.findById(req.params.post_id, function(err,foundPost){
		res.json(foundPost);
	});
}

function update(req, res){
	Post.findByIdAndUpdate(req.params.post_id,
		{$set: req.body}, function(err, foundPost) {
		if (err) {
            console.log(err);
        } else {
			foundPost.city_id = req.body.city_id;
			foundPost.user_id = req.body.user_id;
			foundPost.title = req.body.title;
			foundPost.review = req.body.review;
			foundPost.post_photo = req.body.post_photo;
			res.json(foundPost);
		}
	});
}


function destroy(req, res){
    console.log('Deleting a post...')
    Post.findByIdAndRemove(req.params.post_id, function(err, foundPost){
        if (err){
            console.log(err);
        }
		res.send("review deleted");
	});
}


//show all posts for a specific city
function postsForCity(req,res){
    console.log('GET city and its posts');
    Post.find({city_id: req.params.id},function (err, cityPosts){
        if(err){
            res.send(err);
        }
        return res.json(cityPosts);
    });
}

module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
	destroy: destroy,
	postsForCity: postsForCity
}