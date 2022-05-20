const express = require('express');
const userController = require('./userController');
const router = express.Router();
const passport = require('passport');

router.post('/login', userController.login);
router.post('/join', userController.join);
router.post(
	'/me',
	passport.authenticate('jwt', { session: false }),
	userController.me
);

module.exports = router;
