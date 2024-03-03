const express = require('express');
const { registerController } = require('../controllers/registerController');
const registeRoute = express.Router();

registeRoute.post('/register',registerController);

module.exports = {registeRoute}