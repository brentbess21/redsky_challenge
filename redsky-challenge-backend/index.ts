
import server from './api/server';

const port = 8080;

server.listen(port, ()=> {
    console.log(`*** Listening on localhost:${port} ***`);
})

