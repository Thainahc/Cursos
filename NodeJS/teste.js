var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var count = 2 + 2;

    return response.end('The value of count is =>'.concat(count));
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();

server.on('connection', function (client) {
    ee.emit('newConnection');

    console.log('There is a new connection!!'.concat(client.remoteAddress));
});

ee.on('newConnection', function () {
    console.log('Hey, I am a new event registered by event connection from Http module')
});

server.listen(3000, '127.0.0.1');