var static = require('node-static');

var fileServer = new static.Server('', { cache: 3600, gzip: true });

require('http').createServer(function (request, response) {
	
	

    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8090);

console.log("Getaway server is running on port 8090");