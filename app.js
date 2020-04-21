const express = require('express');
const path = require('path');
const ssr = require('./src/server');
const template = require('./src/template');
const app = express();

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at ${process.env.PORT || 3000}`);
});

// server rendered home page
app.get('/', (req, res) => {
  const content = ssr();
  const response = template('Server render page', {}, content);
  res.send('Hello world!');
});

// server rendered home page
app.get('/client', (req, res) => {
  res.send('Client Hello world!');
});
