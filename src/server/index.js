const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();
const port = 3333;

mongoose.connect(
  'mongodb+srv://davigsa:lekinha@mongodbfree-pvern.mongodb.net/test?retryWrites=true&w=majority',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(routes);

server.listen(port, () => {
  console.log('Server running at port: ' + port);
});
