const express = require('express');
const path = require('path');
const opn = require('opn');
const app = express();

app.use(express.static('app'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/main.html'))
});

app.listen(3000);

opn('http://localhost:3000');