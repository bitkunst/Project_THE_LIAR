const express = require('express');
const userRouter = require('./user');
const authRouter = require("./kakao/authController");
// const playRouter = require('./play');
const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter)
// router.use('/api/play', playRouter);

module.exports = router;
