import React from 'react';
import styled from 'styled-components';

const ProfileTemp = styled.span`
	display: inline-block;
	width: 100px;
	height: 100px;
	margin: 10px 10px;
	background-color: #1111;
`;

const MemProfile = (): JSX.Element => {
	return <ProfileTemp />;
};

export default MemProfile;
