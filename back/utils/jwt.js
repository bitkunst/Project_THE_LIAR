const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
	sign: (user) => {
		const payload = {
			user_id: user.user_id,
			nickname: user.nickname,
		};
		return jwt.sign(payload, JWT_SECRET, {
			algorithm: 'HS256',
			// expiresIn:'1h',
		});
	},
};
