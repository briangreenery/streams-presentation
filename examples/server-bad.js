var fs = require('fs'),
  http = require('http'),
  url = require('url');

var server, port;

port = process.env.PORT || 3000;

server = http.createServer(function(req, res) {
  var path = '.' + url.parse(req.url).path;
  
  fs.createReadStream(path).pipe(res);
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});
