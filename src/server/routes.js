const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const AvatarController = require('../controllers/AvatarController');
const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post(
  '/signup/avatar',
  multer(multerConfig).single('file'),
  AvatarController.store,
);
routes.post(
  '/signup/avatar/:id',
  multer(multerConfig).single('file'),
  AvatarController.update,
);

routes.post('/signup', UserController.store);
routes.get('/users', UserController.index);

routes.post('/signin', SessionController.store);

module.exports = routes;
