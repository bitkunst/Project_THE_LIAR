const { User, sequelize } = require('../../database/models');
const user = require('../../database/models/user');
const jwt = require('../../utils/jwt');
const bcrypt = require('bcrypt');
const passport = require('passport');

const join = async (req, res) => {
	const { user_id, user_pw, nickname } = req.body;
	console.log(req.body)
	try {
		const check = await User.findOne({ where: { user_id } });
		if (check) return res.json({ result: null, msg: '아이디 중복' });

		const hash = await bcrypt.hash(user_pw, 7);

		const user = await User.create({ user_id, user_pw: hash, nickname });
		res.json({
			result: user,
			msg: '',
		});
	} catch (err) {
		res.status(500).json({
			result: null,
			msg: '오류가 발생했습니다',
		});
	}
};

const login = async (req, res) => {
	const done = (error, user, info) => {
		if (error || !user) return res.status(500).json({ error, user, info });
		const { ...payload } = user.dataValues;
		const { user_id, nickname, provider, level } = payload;
		res.json({
			user_id,
			nickname,
			provider,
			level
		});
	};
	passport.authenticate('local', { session: false }, done)(req, res);
};

const me = async (req, res) => {
	if (!user)
		return res
			.status(500)
			.json({ result: null, message: '존재하지 않는 회원입니다' });

	res.json({
		result: true,
		user: req.user,
	});
};

module.exports = {
	login,
	join,
	me,
};
