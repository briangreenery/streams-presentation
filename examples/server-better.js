var fs = require('fs'),
  http = require('http'),
  url = require('url');

var server, port;

port = process.env.PORT || 3000;

server = http.createServer(function(req, res) {
  var path = '.' + url.parse(req.url).path;
  var rs = fs.createReadStream(path);
  
  rs.on('error', function() {
    if (!res.headersSent) {
      res.statusCode = 400;
      res.end('That request was bad, and you should feel bad\n');
    } else {
      req.abort();
    }
  });

  res.on('error', function() {
    rs.destroy();
  });

  rs.pipe(res);
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});
