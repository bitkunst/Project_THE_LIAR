module.exports = (ws) => {
	const randomPlay = ws.of('/play/random');

	randomPlay.on('connection', (socket) => {
		console.log('랜덤플레이 연결');

		randomPlay.on('disconnect', () => {
			console.log('랜덤플레이 나감');
		});

		randomPlay.emit('news', { hello: 'someone conneted at randomPlay' });
	});
};
