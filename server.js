const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use('/', (req, res) => {
    res.send({ message: "Server running..." })
})

module.exports = server;