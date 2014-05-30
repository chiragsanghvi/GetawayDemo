var express = require('express');
var app = express();

var oneDay = 86400000;

// New call to compress content
app.use(express.compress());

var returnIndexPage = function(req, res) {
	require('fs').readFile('./public/index.html', 'binary', function(err, file) {
	  res.writeHead(200);
	  res.write(file, "binary");
	  res.end();
	});
};

app.get('/:activityId', function(req, res){
	returnIndexPage(req, res);
});

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(8090);

console.log("Getaway server is running on port 8090");