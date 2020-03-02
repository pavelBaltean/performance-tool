const request = require('request');
let user;
let flag=false;

//start req
function reqOnLink(url,res){
  request.get({url : url,time : true},function(err, response){
    let data=[url,response.elapsedTime,response.statusCode,response.statusMessage];
    res(data);
  });
}

setInterval(() => {
  console.log('interviewing the interval');
}, 500);



reqOnLink('https://nodejs.dev/making-http-requests-with-nodejs',function(location){
  //console.log(location);
  user=[location[0]+"",location[1]+"",location[2]+"",location[3]+""];
 console.log(user);
});


