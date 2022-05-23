import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../reducers';
import { GameType } from '../../types/gameTypes';
import { UserType } from '../../types';
import Loading from './Loading';
import { random_game_request } from '../../reducers/randomGame';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

let socket: any;

const Play = () => {
	const gameStatus = useSelector<ReducerType, GameType>((state) => {
		return state.randomGame;
	});

	const userInfo = useSelector<ReducerType, UserType>((state) => {
		return state.user;
	});

	useEffect(() => {
		socket = io('http://localhost:4000/api/play/random', {
			transports: ['websocket'],
			upgrade: false,
			forceNew: true,
		});
	}, []);
	const dispatch = useDispatch();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const howMany: any = document.querySelector('#howMany');
		const value = howMany.options[howMany.selectedIndex].value;

		dispatch(
			random_game_request({ mySocket: socket, howMany: parseInt(value) })
		);
		socket.emit('myInfo', {
			socket_id: socket.id,
			nickname: userInfo.me.nickname,
			howMany: parseInt(value),
		});
	};

	return (
		<>
			{gameStatus.isLoading ? (
				<Loading />
			) : (
				<div>
					<li>
						<Link to="/play/friends">친구랑 게임하기</Link>
					</li>
					<li>
						<form onSubmit={handleSubmit}>
							<select id="howMany">
								<option value="4">4명</option>
								<option value="5">5명</option>
								<option value="6">6명</option>
								<option value="7">7명</option>
								<option value="8">8명</option>
							</select>
							<button type="submit">친구랑 게임하기</button>
						</form>
					</li>
				</div>
			)}
		</>
	);
};

export default Play;
