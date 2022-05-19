require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

const User = require('./user')(sequelize, DataTypes);
const Keyword = require('./keyword')(sequelize, DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Keyword = Keyword;

module.exports = db;
