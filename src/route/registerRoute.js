const express = require('express');
const { registerController } = require('../controllers/registerController');
const { myValidator } = require('../validator/registerValidate');
const registeRoute = express.Router();

registeRoute.post('/register',myValidator,registerController);

module.exports = {registeRoute}