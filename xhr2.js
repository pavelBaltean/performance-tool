const requestURL = 'http://localhost:3000/getDataBase';

function sendRequest(methode,url,body = null){
  //const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
  //const reqURL=proxyurl+url;

  return fetch(url).then(response => {
    return response.json();
  });
}

sendRequest('GET',requestURL)
.then(data => console.log(data))
.catch(err => console.log(err));