import React, { useState, useEffect } from 'react';
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
import { MemProfile, Nick, Level } from '../../Components/PlayChat/MemProfile';
import { Responsive, ResponsiveTemplate } from '../../Components/Responsive';
import { InfoBoxRed, InfoBoxBlack } from '../../Components/InfoBox';
import { BtnGrey, BtnBlue, BtnWhite } from '../../Components/Button';
import { io } from 'socket.io-client';

const ResponsiveFlex = styled(ResponsiveTemplate)`
	display: flex;
	justify-content: space-evenly;
	height: 90vh;
`;

const Random = () => {
	const [reply, setReply] = useState('');

	useEffect(() => {
		const socket = io('http://localhost:4000/play/random');
		console.log(socket);

		socket.on('news', (data) => {
			console.log(data.hello);
		});
	}, []);

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
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReply(e.target.value);
	};

	const Items = () => {
		return arr.map((v, k) => {
			return <li key={k}>{v}</li>;
		});
	};

	return (
		<Responsive>
			<div className="chatHeader">
				<InfoBoxRed>주제 : 동물 </InfoBoxRed>
				<InfoBoxBlack>답: 펭귄</InfoBoxBlack>
				<div className="timer">남은시간 00:15</div>
			</div>
			<ResponsiveFlex>
				<div className="chat-left-side">
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 잉구</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 주찬</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 재원</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="" className="profile-img" />
						<Nick>이름길게적기기기기기ㅣㄱ </Nick>
						<Level>lv.2</Level>
					</MemProfile>
				</div>
				<MainContainer className="main-container">
					<ChatContainer>
						<MessageList>
							<MessageList.Content className="main-content">
								<ul>{Items()}</ul>
							</MessageList.Content>
						</MessageList>
						<MessageInput
							placeholder="내용을 입력해주세요"
							onChange={handleChange}
							value={reply}
						/>
					</ChatContainer>
				</MainContainer>
				<div className="chat-right-side">
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 잉구</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 주찬</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="/img/dog.png" className="profile-img" />
						<Nick>경일 재원</Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<MemProfile>
						<img src="" className="profile-img" />
						<Nick>이름길게적기기기기기ㅣㄱ </Nick>
						<Level>lv.2</Level>
					</MemProfile>
					<div className="btngp">
						<BtnBlue>친구초대</BtnBlue>
						<BtnWhite>게임준비</BtnWhite>
						<BtnGrey>나가기</BtnGrey>
					</div>
				</div>
			</ResponsiveFlex>
		</Responsive>
	);
};

export default Random;
