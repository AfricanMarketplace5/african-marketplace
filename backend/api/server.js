//Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router')
const itemsRouter = require('./')


//Instance Of Express App
const server = express();


//Calling Middleware
server.use(helmet());
server.use(cors());
server.use(express.json());


//Consuming Routers
server.use('/api/auth', authRouter);
server.use('/api/items', itemsRouter);


//Error-Handling Middleware
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});


//Exports; Exposing
module.exports = server;