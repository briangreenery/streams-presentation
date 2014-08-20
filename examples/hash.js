var crypto = require('crypto'),
  fs = require('fs');

var sha1 = crypto.createHash('sha1'),
  sha256 = crypto.createHash('sha256'),
  rs = fs.createReadStream(process.argv[2]);

rs.pipe(sha1);
rs.pipe(sha256);

rs.on('end', function() {
  console.log('sha1   ' + sha1.read().toString('hex'));
  console.log('sha256 ' + sha256.read().toString('hex'));
});
