const express = require('express');
const userRouter = require('./user');
// const playRouter = require('./play');
const router = express.Router();

router.use('/api/user', userRouter);
// router.use('/api/play', playRouter);

module.exports = router;
