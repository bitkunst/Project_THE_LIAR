const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.get('/login', userController.login);

module.exports = router;
