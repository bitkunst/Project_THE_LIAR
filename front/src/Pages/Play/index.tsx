import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => {
	return (
		<div>
			<li>
				<Link to="/play/friends">친구랑 게임하기</Link>
			</li>
			<li>
				<Link to="/play/random">랜덤 게임하기</Link>
			</li>
		</div>
	);
};

export default Play;
