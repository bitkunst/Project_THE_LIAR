const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../database/models');

const passportConfig = { usernameField: 'user_id', passwordField: 'user_pw' };

const passportVerify = async (user_id, user_pw, done) => {
	try {
		// console.log(user_id);
		// 유저 아이디로 일치하는 유저 검색
		const user = await User.findOne({ where: { user_id } });

		// console.log(user.user_pw);
		// 검색된 유저 데이터가 없으면 에러 표시
		if (!user)
			return done(null, false, { reason: '존재하지 않는 사용자입니다.' });

		// 검색된 유저 데이터가 있다면 유저 해쉬된 비밀번호 비교
		const result = await bcrypt.compare(user_pw, user.user_pw);

		// 해쉬된 비밀번호가 다를경우 에러 표시
		if (!result)
			return done(null, false, {
				reason: '올바르지 않은 비밀번호입니다.',
			});

		//성공
		return done(null, user);
	} catch (e) {
		console.log(e);
		return done(e);
	}
};

module.exports = () => {
	passport.use('local', new LocalStrategy(passportConfig, passportVerify));
};
