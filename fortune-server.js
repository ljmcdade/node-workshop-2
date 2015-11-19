// function getYourFortune(){

//     var fortunes = ["outlook is good", "outlook is not so good", "outlook is hazy; try again later"];
    
//     var yourFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  
//     console.log(yourFortune);
// }

var fortune = require('./library/fortune');

var http = require('http');

var requestListener = function(request, response){
    
    var mymessage = fortune.getYourFortune();
    
    response.end(mymessage);
}

var server= http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP );
 