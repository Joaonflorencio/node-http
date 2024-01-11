// server.js
const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.subtitle}</h1>
        <p>${data.description}</p>
      </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});