import React from 'react';
import styled from 'styled-components';
import { Props } from '../types';

const InfoBoxTemp = styled.span`
	display: inline-block;
	font-weight: bold;
	margin-left: 5px;
	padding: 7px 14px;
	box-sizing: border-box;
	font-size: 20px;
	width: 230px;
	height: 60px;
	line-height: 50px;

	@media screen and (max-width: 767px) {
		width: 120px;
		height: 35px;
		font-size: 13px;
		line-height: 20px;
	}
`;

const InfoBoxRedTemp = styled(InfoBoxTemp)`
	background-color: #b20d0d;
	color: #ffff;
`;
const InfoBoxBlackTemp = styled(InfoBoxTemp)`
	background-color: rgb(0, 0, 0);
	color: #f9e000;
`;

export const InfoBoxRed = ({ children }: Props) => {
	return (
		<>
			<InfoBoxRedTemp>{children}</InfoBoxRedTemp>
		</>
	);
};

export const InfoBoxBlack = ({ children }: Props) => {
	return (
		<>
			<InfoBoxBlackTemp>{children}</InfoBoxBlackTemp>
		</>
	);
};
