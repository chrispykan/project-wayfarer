var User = require('../models/User');

function index(req, res){
    console.log('GET users index')
    User.find({}, function(err, users){
        if(err){
            res.send(err);
        }
        return res.json(users);
    });
}

function show(req, res){
    console.log('GET one user')
    User.findById(req.params.user_id, function(err, foundUser){
        if(err){
            res.send(err);
        }
        return res.json(foundUser);
    });
}

function update(req, res){
    console.log('Updating a user')
    User.findByIdAndUpdate(req.params.user_id, function(err, updatedUser){
        if(err){
            res.send(err);
        }else{
            updatedUser.name = req.body.name;
			updatedUser.email = req.body.email;
            updatedUser.password = req.body.password;
            updatedUser.current_city = req.body.current_city;
            res.json(updatedUser);
         }
    });
   
}

function destroy(req, res){
    console.log('deleting a user');
    User.findByIdAndRemove(req.params.user_id, function(err, deleteUser){
        if (err){
            console.log(err);
        }
		res.send("User deleted");
	});
  
}

module.exports={
    index: index,
    show: show,
    update: update,
    destroy: destroy
}