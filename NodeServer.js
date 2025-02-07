const http = require('http');

const hostname = '127.0.0.1';
<<<<<<< HEAD
const port = 4000;
=======
const port = 5000;
>>>>>>> de305036fa4dd6d5bba061c97f76377a62193818

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
