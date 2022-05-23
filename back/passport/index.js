const passport = require('passport');
const local = require('./localStrategy');
const jwt = require('./jwtStrategy');
const kakao = require('./kakaoStrategy');

module.exports = () => {
	// req.login 호출시 실행됨.
	passport.serializeUser((user, done) => {
		const { idx, user_id, provider, nickname } = user;
		return done(null, {
			idx,
			user_id,
			provider,
			nickname,
		});
	});

	local();
	jwt();
	kakao();
};
