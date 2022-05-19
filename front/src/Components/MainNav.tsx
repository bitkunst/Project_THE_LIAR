import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
	return (
		<Link to="/user">
			<button>라이어게임 하러 가실래요?</button>
		</Link>
	);
};

export default MainNav;
