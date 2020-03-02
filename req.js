const request = require('request');


 //vI
function move(){  //добавить параметры и конвертировать в сек в милисекунды
   let count=0;
   let id = setInterval(reqLink,1000);
   function reqLink(){
     if(count ==3){
       clearInterval(id);
     }else{
       count++;
    request.get({
      url : 'https://nodejs.dev/making-http-requests-with-nodejs',
      time : true
    },function(err, response){
      console.log('Request time in ms', response.elapsedTime);
      console.log('Status code: ',response.statusCode);
      console.log('Status Message:',response.statusMessage);
      //здесь должен вызываться метод для передачи данных в бд
      console.log(" ");
    
    });
  }
   }
}

let url='https://nodejs.dev/making-http-requests-with-nodejs';
let array=[3];

//сделать так чтобы данные return с функции vII
let reqOnLink =() => {
  request.get({
    url : url,
    time : true
  },function(err, response){
    //incorrect
  let resTime=response.elapsedTime+"";
  let resStatusCode=response.statusCode+"";
  let resStatusMessage=response.statusMessage+"";

    array=[url,resTime,resStatusCode,resStatusMessage];
    
    console.log(array);
    console.log(" ");
  
    // for(var item in response.headers) {
    //   console.log(item + ": " + response.headers[item]);
    // }

   
  });
 
};
//variant III
function reqOnLink(url,res){
  request.get({url : url,time : true},function(err, response){
    let data=[url,response.elapsedTime,response.statusCode,response.statusMessage];
    res(data);
  });
}



module.exports=reqOnLink(url,res);

//http://localhost:8080