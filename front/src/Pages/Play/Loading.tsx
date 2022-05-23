import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../reducers';
import { GameType } from '../../types/gameTypes';

const Loading = () => {
	const gameStatus = useSelector<ReducerType, GameType>((state) => {
		return state.randomGame;
	});

	const socket = gameStatus.mySocket;

	socket.emit('loading');

	return (
		<div>
			<h1>LOADING...</h1>
		</div>
	);
};

export default Loading;
