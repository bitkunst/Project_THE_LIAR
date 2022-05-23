const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

router.get(
  "/kakao",
  (req, res, next) => {
    next();
  },
  passport.authenticate("kakao")
);

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    console.log("유저", req.user);
    const jwt_token = jwt.sign(
      {
        user_id: req.user.user_id,
        nickname: req.user.nickname,
        provider: req.user.provider,
        level:req.user.level
      },
      JWT_SECRET
    );
    res.cookie("AccessToken", jwt_token);
    res.redirect('http://localhost:3000/user/profile/');
  }
);

router.get("/getInfo", (req, res, next) => {
  const { AccessToken } = req.cookies;
  
  res.json({
    payload: jwt.decode(AccessToken)
  })
});

module.exports = router;
