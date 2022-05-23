module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			idx: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			user_pw: {
				type: DataTypes.STRING(100),
				allowNull: true,
			},
			nickname: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			provider: {
				type: DataTypes.STRING(10),
				allowNull: false,
				defaultValue: 'local',
			},
			score: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			level: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 1,
			},
			friends: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			user_img: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
		},
		{
			tableName: 'User',
			modelName: 'User',
			timestamps: false,
			charset: 'utf8mb4',
		}
	);
	return User;
};
