var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello Jake!');
});

app.get('/about', function (req, res) {
	res.send('About Us.');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);