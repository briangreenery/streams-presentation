var fs = require('fs');

var rs = fs.createReadStream(process.argv[2]);

rs.on('readable', function() {
  setTimeout(function() {
    var chunk = rs.read();

    if (chunk) {
      console.log(chunk.length + ' bytes read');
    }
  }, 5000);
});
