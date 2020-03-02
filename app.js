const express = require("express");
  
const app = express();
 
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/index.html");
});

app.get("/run", function(request, response){
      
  response.sendFile(__dirname + "/graph.html");
});
  
app.listen(3000);