const http = require('http');

const host = 'localhost';
const port = 8000;

const sleep = ms => new Promise((resolve => setTimeout(resolve, ms)));

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': 'GET, POST',
    'Access-Control-Max-Age': 2592000,

}

const getListener = (request, response) => {
    console.log('HELLO FROM GET')

    response.writeHead(200, headers);


   sleep(1000)
    .then(() =>response.end(JSON.stringify('YOUR DATA')));

}

const postListener = (request, response) => {
    console.log('HELLO FROM POST')

}




const requestListener = (request, response) => {
    switch(request.method) {
        case 'GET': {
            getListener(request, response);
            break;

        }
        case 'POST': {
            postListener(request, response);
            break


        }
        default:
            console.log('Unsupported method', request.method);
    }

}

const server = http.createServer(requestListener)

server.listen(port, host, () =>{
    console.log(`server is running in http://${host};${port}`)

});