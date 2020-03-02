




'use strict';

const http = require('http');

let start_time = new Date().getTime();

http.request('http://google.com', { method: 'HEAD' }, (res) => {
  console.log(res.statusCode);
  console.log('Time elapsed:', new Date().getTime() - start_time);

}).on('error', (err) => {
  console.error(err);
}).end();






