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

const ResponsiveFlex = styled(ResponsiveTemplate)`
	display: flex;
	justify-content: space-between;
	height: 90vh;
`;

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
