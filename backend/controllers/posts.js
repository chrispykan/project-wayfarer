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
			console.log('hello ', req.params.id)
			newPost.city_id = req.params.id;
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
	
	Post.findByIdAndUpdate(req.params.post_id, {$set: req.body}, {"new":true}, function(err, updatePost){
		console.log('inside the findbyid fn');
		if (err) {
            console.log(err, 'on update post');
        } else {
			console.log('inside the else stmt', req.body, '111', updatePost)
			updatePost.city_id = req.body.id;
			updatePost.user_id = req.body.user_id;
			updatePost.title = req.body.title;
			updatePost.review = req.body.review;
			updatePost.post_photo = req.body.post_photo;
			res.json(updatePost);
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

function postsForUser(req, res){
	console.log('Get user and its posts');
	Post.find({user_id: req.params.user_id}, function(err, usersPosts){
		if(err){
            res.send(err, ' postsForUser issue');
        }
        return res.json(usersPosts);
    });
}

module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
	destroy: destroy,
	postsForUser: postsForUser,
	postsForCity: postsForCity
}