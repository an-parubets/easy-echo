#! /usr/bin/env node

const express = require('express');
const logger = require('./logger');

const PORT = 8000;

const app = express();

app.use(logger);

app.all('/*', (req, res, next) => {
  res.json({ status: 'OK' });
  next();
});

app.listen(PORT, () => {
  console.log(`Easy echo server listening on port ${PORT}`);
});
