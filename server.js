var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Server ' + PORT + ' is starting...');
	console.log('Express server started!');
});





















// in command use git add .    to add new file/modified files to git.
// in command use git commit -a -m "Type what I did here"   to document.