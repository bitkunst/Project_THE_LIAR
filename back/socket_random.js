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
			console.log(data);
		});
	});

	io.on('disconnect', (socket) => {
		console.log('socket closed');
	});
};
