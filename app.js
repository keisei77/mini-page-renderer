const express = require('express');
const path = require('path');
const ssr = require('./src/server');
import template from './src/template';
const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at ${process.env.PORT || 3000}`);
});

const initialState = {
  compiler: 'typescript',
  framework: 'express.js',
};

// server rendered home page
app.get('/', (req, res) => {
  const content = ssr(initialState);
  const response = template('Server render page', initialState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});

// server rendered home page
app.get('/client', (req, res) => {
  const response = template('Client Side Rendered page');
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});
