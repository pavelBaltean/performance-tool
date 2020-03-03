const url = 'http://localhost:3000/getDataBase';

function sendRequest(methode, url, body = null){
 const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
 const reqURL=proxyurl+url;
  return fetch(url);
}

sendRequest('GET', url)
.then(data => console.log(data))
.catch(err => console.log(err))