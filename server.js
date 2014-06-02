// Does stuff
/* long comment
uihhiuiuhhiuihu



iiuinuuinniu
what up */

var http = require('http'),
	os = require ('os'),
	port = process.env.PORT || 8000;

http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('Hello World peace be unto you\n');
}).listen(port);

console.log('Server is running at http://' + os.hostname() + ":" + port);
