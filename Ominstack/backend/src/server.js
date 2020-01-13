const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const server = express();

//Nome do banco: omnistack8
mongoose.connect('mongodb+srv://thaina:mongodb1@cluster0-pxtwj.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);