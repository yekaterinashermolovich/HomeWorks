const http = require('http');

const host = 'localhost';
const port = 8000;

const sleep = ms => new Promise((resolve => setTimeout(resolve, ms)));

const nums = [1, 2];

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Method': 'GET, POST',
    'Access-Control-Max-Age': 2592000,

}

const getListener = (request, response) => {
    console.log('HELLO FROM GET')

    response.writeHead(200, headers);


   sleep(1000)
    .then(() =>response.end(JSON.stringify(nums)));

}

const postListener = (request, response) => {
    console.log('HELLO FROM POST');

    request.on('data', (data) => {
        console.log(data);
        console.log(data.toString());
        console.log(JSON.parse(data.toString()));

        nums.push(JSON.parse(data.toString()).data);

    })

    request.on('end', () => {
        response.writeHead(200, headers);

        sleep(1000)
        .then(() =>response.end(JSON.stringify('SUCCESSFULLY ADDED')));    

    })

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