const server = require('./api/server');

const User = require('./api/user-model');

const port = 8080;

server.listen(port, ()=> {
    console.log(`*** Listening on localhost:${port} ***`);
})

