var db = require('../models');

function index(req, res){
    console.log('GET posts index')
    db.Post.find({}, function(err, post){
        if(err){
            res.send(err);
        }
        return res.json(post);
    });
}

function create(req, res){
    console.log('POST post')
	db.Post.create(req.body, function(err, newPost){
		if(err){
			res.send(err);
		}else{
			db.User.findById(req.params.user_id, function(err, userSuccess) {
				if (err) console.log(err);
				else {
					newPost.user_id = req.params.user_id;
					newPost.save();
					res.json(newPost);
				}
			});
		}
	});
}

function show(req, res){
	console.log('GET one post')
	db.Post.findById(req.params.id, function(err,foundPost){
		res.json(foundPost);
	});
}

function update(req, res){
	db.Post.findByIdAndUpdate(req.params.id,
		{$set: req.body}, function(err, foundPost) {
		if (err) {
            console.log(err);
        } else {
			foundPost.title = req.body.title;
			foundPost.review = req.body.review;
			foundPost.post_photo = req.body.post_photo;
			res.json(foundPost);
		}
	});
}


function destroy(req, res){
    console.log('Deleting a post...')
    db.Post.findByIdAndRemove(req.params.id, function(err,foundPost){
        if (err){
            console.log(err);
        }
		res.send("review deleted");
	});
}

module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
}