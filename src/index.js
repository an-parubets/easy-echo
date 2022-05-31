#! /usr/bin/env node

require('dotenv').config();

const express = require('express');
const logger = require('./logger');

const PORT = process.env.npm_config_port ?? process.env.PORT;

const app = express();

app.use(logger);

app.all('/*', (req, res, next) => {
  res.json({ status: 'OK' });
  next();
});

app.listen(PORT, () => {
  console.log(`Easy echo server listening on port ${PORT}`);
});
