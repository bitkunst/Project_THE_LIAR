import React from 'react';
import styled from 'styled-components';
import MainNav from '../Components/MainNav';
import Responsive from '../Components/Responsive';

const Logo = styled.h1`
	font-family: 'arial';
	font-size: 50px;
`;

const Wrapper = styled(Responsive)`
	background-color: #bab3b3;
`;

const Main = () => {
	return (
		<Wrapper>
			<Logo>FREAKIN&apos; AWESOME LIAR GAME</Logo>
			<MainNav />
		</Wrapper>
	);
};

export default Main;
