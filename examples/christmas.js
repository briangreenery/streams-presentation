var colors = require('colors'),
  es = require('event-stream');

var line = 0;

process.stdin
  .pipe(es.split())
  .pipe(es.map(function(data, cb) {
    line += 1;

    if (line % 2) {
      cb(null, data.toString().green);
    } else {
      cb(null, data.toString().red);
    }
  }))
  .pipe(es.join('\n'))
  .pipe(process.stdout);
