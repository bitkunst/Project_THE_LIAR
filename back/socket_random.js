const findRandomGame = require('./utils/findRandomGame');
let totalPlayers = [];
class Player {
	constructor(socketID, nickname, howMany, mySocket) {
		(this.socketID = socketID),
			(this.nickname = nickname),
			(this.howMany = howMany),
			(this.mySocket = mySocket);
	}
	getID() {
		return this.socketID;
	}
}

module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log('socket open');

		socket.on('myInfo', (data) => {
			const user = new Player(
				data.socket_id,
				data.nickname,
				data.howMany,
				socket
			);
			totalPlayers.push(user);
			findRandomGame(io, user);
		});

		socket.on('disconnect', () => {
			console.log('socket close');
			let idx;
			const leftUser = totalPlayers.filter((v, k) => {
				idx = k;
				return v.socketID == socket.id;
			});
			// console.log('tp', totalPlayers);
			totalPlayers.splice(idx, 1);
			// console.log('after', totalPlayers);
		});
	});
};
