import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ReducerType } from '../../reducers';
import { GameType } from '../../types/gameTypes';
import Random from './Random';

const Loading = () => {
	const gameStatus = useSelector<ReducerType, GameType>((state) => {
		return state.randomGame;
	});

	const isStart = gameStatus.isStart;
	const socket = gameStatus.mySocket;

	return (
		<>
			{isStart ? (
				<Random />
			) : (
				<div>
					<h1>LOADING...</h1>
				</div>
			)}
		</>
	);
};

export default Loading;
