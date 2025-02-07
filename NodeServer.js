const http = require('http');

const hostname = '127.0.0.1';
<<<<<<< HEAD
const port = 5000;
=======
const port = 3000;
>>>>>>> 131d48a148a4603f9c63f4e75dd7fbe0c64682ac

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
