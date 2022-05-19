const express = require('express');
const { sequelize } = require('./database/models');
const cors = require('cors');
const http = require('http');
const SocketIO = require('socket.io');
const router = require('./routes');
const app = express();
const httpServer = http.createServer(app);
const webSocket = require('./socket');
const ws = SocketIO(httpServer, {
	cors: {
		origin: true,
		credentials: true,
	},
});
webSocket(ws);

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

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
