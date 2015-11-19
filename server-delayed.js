var http = require('http');

var requestListener = function(request, response){
    setTimeout(function() {
        response.end("Hello world!");
    }, 10000);
    
    
};


var server= http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP );
    