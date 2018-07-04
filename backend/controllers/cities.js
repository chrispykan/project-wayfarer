var City = require('../models/City');

function index(req, res){
    console.log('GET all cities, index')
    City.find({}, function(err, city){
        if(err){
            res.send(err);
        }
        return res.json(city);
    });
}

function create(req, res){
    console.log('POST for Cities')
	City.create(req.body, function(err, newCity){
		if(err){
			res.send(err);
		}else{
			
			newCity.save();
			res.json(newCity);	
		}
	});
}

function show(req,res){
    console.log('GET one city')
    City.findById(req.params.id, function(err, foundCity){
        if(err){
            res.send(err);
        }
        return res.json(foundCity);
    });
}



module.exports = {
    index: index,
    show: show,
    create: create
}