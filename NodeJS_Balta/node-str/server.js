'use strict' // Forçar o JavaScript a ser criterioso com erros de digitação

const http = require('http');
const debug = require('debug');
const express = require('express');

const app = express();
const port = normalizePort(process.env.port || 3000); // Se a execução for por meio do Microsoft Azure, por exemplo, 
// uma porta será setada por ele. Por isso: process.env.port.
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);
server.on('error', onError);

console.log('API rodando na porta ' + port);

function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)) { // Se não é número
        return value;  // Retorna 10
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};