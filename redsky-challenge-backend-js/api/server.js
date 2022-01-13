const express = require('express');

const server = express();

server.use(express.json());

//ENDPOINTS

server.get('/', (req, res)=> {
    res.json({
        message: 'Hello World! From my server!'
    })
})



module.exports = server;