// const requestURL = 'http://localhost:3000/getDataBase';

// function sendRequest(methode,url,body = null){
//   //const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
//   //const reqURL=proxyurl+url;

//   return fetch(url).then(response => {
//     return response.json();
//   });
// }

// sendRequest('GET',requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err));


let today = new Date();
let h=(today.getHours())-2;
h=('0'+h).slice(-2);


let curDate=today.getUTCFullYear()+'-'+('0'+today.getMonth()).slice(-2)+'-'+('0'+today.getDay()).slice(-2)+'T'+h+':'+('0'+today.getMinutes()).slice(-2)+':'+('0'+today.getSeconds()).slice(-2)+'Z';






console.log(today);
console.log(curDate);

//2020-02-01T17:10:00.000Z