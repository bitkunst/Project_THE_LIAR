module.exports = (sequelize, DataTypes) => {
	const Keyword = sequelize.define(
		'Keyword',
		{
			idx: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			theme: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			keyword: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
		},
		{
			tableName: 'Keyword',
			modelName: 'Keyword',
			timestamps: false,
			charset: 'utf8mb4',
		}
	);

	return Keyword;
};
