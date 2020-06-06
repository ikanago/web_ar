const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
});

const hostname = 'localhost';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
