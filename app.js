var express = require('express');
var app = express();

app.use(express.static('templates'));

app.get('/', function(req, res) {	
	res.send('test');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000');
})