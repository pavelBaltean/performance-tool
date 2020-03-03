const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method,url,body = null){
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
  const reqURL=proxyurl+url;

  const headers = {
    'Content-Type':'application/json'
  }

  return fetch(reqURL, {
    method: method,
    body :JSON.stringify(body),
    headers: headers
  }).then(response => {
    return response.json();
  });
}
const body ={
  url :'https://www.google.com',
  statusCode :  '359',
  statusMessaage : '200',
  responseTime : 'OK'
}

sendRequest('POST',requestURL,body)
.then(data => console.log(data))
.catch(err => console.log(err));




//I
// xhr.onload=() => {
//   console.log(JSON.parse(xhr.response));
// }

//II
// function sendRequest(methode,url){
//   return new Promise((resolve,reject) => {

//     const xhr=new XMLHttpRequest();
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const reqURL=proxyurl+url;

//     xhr.open(methode,reqURL);
    
//     xhr.responseType='json';
    
//     xhr.onload=() => {
//       if(xhr.status >= 400){
//         reject(xhr.response);
//       }else{
//       resolve(xhr.response);
//       }
//     }

//     xhr.onerror =() => {
//       reject(xhr.response);
//     }

//     xhr.send();
//   });

// }

// sendRequest('GET','https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.log(err));



//fetch(GET)

// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(methode,url,body = null){
//   const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
//   const reqURL=proxyurl+url;

//   return fetch(reqURL).then(response => {
//     return response.json();
//   });
// }

// sendRequest('GET',requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err));