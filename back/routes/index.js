const express = require("express");
const userRouter = require("./user");
const authRouter = require("./kakao/authController");
const router = express.Router();

router.use("/api/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
