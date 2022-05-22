const express = require('express');
const { sequelize } = require('./database/models');
const cors = require('cors');
const http = require('http');
const SocketIO = require('socket.io');
const router = require('./routes');
const app = express();
const httpServer = http.createServer(app);
const Socket1 = require('./socket_random');
const passport = require('passport');
const passportConfig = require('./passport');
const io = SocketIO(httpServer, {
	cors: {
		origin: 'http://localhost:3000',
		credentials: true,
	},
	requestCert: true,
	secure: true,
	rejectUnauthorized: false,
	transports: ['websocket'],
});
const randomRoom = io.of('/api/play/random');
Socket1(randomRoom);

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000'],
		credentials: true,
	})
);

app.use(passport.initialize()); // passport 장착
passportConfig(); // 모든 전략을 모아둔파일을 실행하기.

app.use(router);

httpServer.listen(4000, async () => {
	try {
		await sequelize.sync({ alter: true });
		console.log('db synced');
		console.log('back server onload');
	} catch (err) {
		console.log(err);
	}
});
