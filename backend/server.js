var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// var controllers = require(./controllers);


app.get('/', function(req, res){
	res.send('Server Working...');
});


let port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});