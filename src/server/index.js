const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

const server = express();
const port = 3333;

mongoose.connect(process.env.MONGOOSE_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));
server.use(routes);

server.listen(port, () => {
  console.log('Server running at port: ' + port);
});
