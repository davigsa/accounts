const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const routes = express.Router();

routes.post('/', multer(multerConfig).single('file'), (req, res) => {
    return res.json({ message: "hola munda"});
});

module.exports = routes;