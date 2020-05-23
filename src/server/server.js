const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../..', 'build')));

app.get('/ping', (_, res) => res.send('pong'));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Server running on http://localhost:8080/')
});