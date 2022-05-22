import React from 'react';
import styled from 'styled-components';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
} from '@chatscope/chat-ui-kit-react';
import './style.css';
import MemProfile from '../../Components/PlayChat/MemProfile';
import { Responsive, ResponsiveTemplate } from '../../Components/Responsive';
import { io, Socket } from 'socket.io-client';
import {
	ServerToClientEvents,
	ClientToServerEvents,
	InterServerEvents,
	SocketData,
} from '../../types/socketTypes';
import { useEffect } from 'react';

const ResponsiveFlex = styled(ResponsiveTemplate)`
	display: flex;
	justify-content: space-between;
	height: 90vh;
`;
let socket: any;

const Random = () => {
	const arr = [
		'123',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'asdf',
		'hi',
		'asdf',
		'4567',
		'hi',
		'asdf',
		'asdf',
		'안녕하세요',
		'안녕하세요',
		'안녕하세요',
		'안녕하세요',
		'안녕하세요',
	];

	useEffect(() => {
		socket = io('http://localhost:4000/api/play/random', {
			transports: ['websocket'],
			upgrade: false,
			forceNew: true,
		});
		socket.on('welcome', () => {
			socket.emit('myInfo', { socket_id: socket.id, nickname: 'ingoo' });
		});
	}, []);

	const Items = () => {
		return arr.map((v, k) => {
			return <li key={k}>{v}</li>;
		});
	};

	return (
		<Responsive>
			<div className="chatHeader"></div>
			<ResponsiveFlex>
				<div style={{ background: 'red', width: '15%' }}>hi</div>
				<MainContainer
					style={{
						background: 'red',
						position: 'relative',
						width: '70%',
						height: '100%',
					}}
				>
					<ChatContainer>
						<MessageList>
							<MessageList.Content
								style={{
									display: 'flex',
									flexDirection: 'column',
									textAlign: 'center',
									fontSize: '2vw',
								}}
							>
								<ul className="color">{Items()}</ul>
							</MessageList.Content>
						</MessageList>
						<MessageInput
							placeholder="Type message here"
							style={{ fontSize: '2vw' }}
						/>
					</ChatContainer>
				</MainContainer>
				<div style={{ background: 'blue', width: '15%' }}>hi</div>
			</ResponsiveFlex>
		</Responsive>
	);
};

export default Random;
