var http = require('http');
var requestListener = function(request, response){
    response.end("Hello world!");
}
var server= http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP );
        
