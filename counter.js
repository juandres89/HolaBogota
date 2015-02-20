var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hola Bogota!\n');
    response.write('Hemos tenido '+userCount+' visitas!\n');
    response.end();
}).listen(8080);

console.log('Servidor iniciado');