#! /usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
});

require('./config/env');

const express = require('express');
const logger = require('./utils/logger');

const PORT = process.env.PORT;

const app = express();

app.use(logger);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');

  res.json({ status: 'OK' });
  next();
});

app.listen(PORT, () => {
  console.log(`Easy echo server listening on port ${PORT}`);
});
