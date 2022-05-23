const passport = require("passport");
const { Strategy: KakaoStrategy } = require("passport-kakao");
const { User } = require("../database/models/");
const Client_ID = process.env.Client_ID;

const passportKakao = {
  clientID: Client_ID,
  callbackURL: "/api/auth/kakao/callback",
};

const passportVerify = async (accessToken, refreshToken, profile, done) => {
  // console.log('kakao',profile)
  try {
    // 유저 아이디로 일치하는 유저 검색
    const user = await User.findOne({
      where: { user_id: profile._json.kakao_account.email, provider: "kakao" },
    });

    // 검색된 유저 데이터가 없으면 에러 표시
    if (user) {
      done(null, user);
    } else {
      const user = await User.create({
        user_id: profile._json.kakao_account.email,
        nickname: profile.username,
        // nick: profile.displayName,
        provider: "kakao",
      });
      done(null, user);
    }
  } catch (e) {
    console.log(e);
    return done(e);
  }
};

module.exports = () => {
  passport.use("kakao", new KakaoStrategy(passportKakao, passportVerify));
};
