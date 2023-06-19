const http = require('http');

const username = 'admin';
const password = 'password';

const server = http.createServer((req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const credentials = authHeader.split(' ')[1];
    const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8');
    const [enteredUsername, enteredPassword] = decodedCredentials.split(':');

    if (enteredUsername === 'admin' && enteredPassword === '123') {
      // User authenticated successfully
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Authenticated');
      return;
    }
  }

  // User authentication failed
  res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' });
  res.end('Authentication required');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
