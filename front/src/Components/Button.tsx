import React from 'react';
import styled from 'styled-components';
import { Props } from '../types';
import { useNavigate } from 'react-router-dom';

const ButtonTemp = styled.button`
	width: 105px;
	height: 40px;
	border: none;
	background-color: #eee;
	cursor: pointer;
	margin-bottom: 10px;
	box-shadow: 1px 1px 3px #c4c4c4;

	@media screen and (max-width: 767px) {
		width: 55px;
		font-size: 10px;
	}
`;

const ButtonTempBlue = styled(ButtonTemp)`
	background-color: #54b9ca;
	color: #fff;
	font-weight: bold;
	box-shadow: 2px 2px 5px #9ec6ce;
`;

const ButtonTempWhite = styled(ButtonTemp)`
	background-color: #fff;
	border: solid 1px #eee;
	color: #111;
	box-shadow: 1px 1px 3px #c4c4c4;
`;

export const BtnGrey = ({ children }: Props) => {
	return <ButtonTemp>{children}</ButtonTemp>;
};
export const BtnBlue = ({ children }: Props) => {
	return <ButtonTempBlue>{children}</ButtonTempBlue>;
};
export const BtnWhite = ({ children }: Props) => {
	return <ButtonTempWhite>{children}</ButtonTempWhite>;
};
