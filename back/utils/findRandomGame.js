let players3 = [];
let players4 = [];
let players5 = [];
let players6 = [];
let players7 = [];
let players8 = [];

module.exports = (io, user) => {
	switch (user.howMany) {
		case 4:
			players4.push(user);
			if (players4.length >= 4) {
				const roomName = 'room' + new Date().getTime();
				players4.forEach((v) => {
					v.mySocket.join(roomName);
				});
				players4.splice(0, 4);
				io.in(roomName).emit('start', { isStart: true });
			}
			console.log(players4);
			break;
		case 5:
			players5.push(user);
			break;
		case 6:
			players6.push(user);
			break;
		case 7:
			players7.push(user);
			break;
		case 8:
			players8.push(user);
			break;
	}
};
