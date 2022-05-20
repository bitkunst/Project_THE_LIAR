const passport = require('passport');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require('../database/models');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	// jwtFromRequest: ExtractJwt.fromHeader('authorizaiton'),
	secretOrKey: JWT_SECRET,
};

const verify = async (jwt_payload, done) => {
	try {
		const user = await User.findOne({
			where: { user_id: jwt_payload.email },
			attributes: { exclude: ['user_pw'] },
		});

		if (!user) return done(null, false, '토큰이 이상해~');
		done(null, user);
	} catch (e) {
		done(e, null, 'TOKEN 존재하지않음.');
	}
};

module.exports = () => {
	passport.use('jwt', new JWTStrategy(options, verify));
};
