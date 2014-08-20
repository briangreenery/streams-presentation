var base64 = require('base64-stream'),
  fs = require('fs'),
  zlib = require('zlib');

fs.createReadStream(process.argv[2])
  .pipe(zlib.createGzip())
  .pipe(base64.encode())
  .pipe(process.stdout);
