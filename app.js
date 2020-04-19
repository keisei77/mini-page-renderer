const express = require('express');
const path = require('path');

const app = express();

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at ${process.env.PORT || 3000}`);
});

// server rendered home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});
