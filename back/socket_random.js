let players3 = [];
let players4 = [];
let players5 = [];
let players6 = [];
let players7 = [];
let players8 = [];

module.exports = (io) => {
	io.on('connection', (socket) => {
		console.log('socket open');

		socket.emit('welcome');
		socket.on('myInfo', (data) => {
			const user = {
				socketID: data.socket_id,
				nickname: data.nickname,
			};
		});

		socket.on('loading', () => {
			console.log('오니?');
		});
	});

	io.on('disconnect', (socket) => {
		console.log('socket closed');
	});
};
