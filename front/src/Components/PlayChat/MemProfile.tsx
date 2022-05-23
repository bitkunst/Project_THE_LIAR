import React from 'react';
import styled from 'styled-components';
import { Props } from '../../types';

const ProfileTemp = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 98%;
	height: 130px;
	border: dashed 1px #c4c4c4;
	border-radius: 5px;
	margin-bottom: 10px;
	box-shadow: 2px 2px 5px #c4c4c4;

	@media screen and (max-width: 767px) {
		height: 90px;
		margin-bottom: 5px;
		box-shadow: 1px 1px 3px #c4c4c4;
	}
`;

const NickTemp = styled.span`
	width: 98%;
	white-space: nowrap;
	overflow: hidden;
	font-size: 0.5vw;
	text-overflow: ellipsis;
	text-align: center;

	@media screen and (max-width: 767px) {
		font-size: 0.5vw;
	}
`;
const LevelTemp = styled.span`
	margin: 0px 2px;
	width: 98%;
	font-size: 10px;
	text-align: center;
`;

export const MemProfile = ({ children }: Props) => {
	return <ProfileTemp>{children}</ProfileTemp>;
};

export const Nick = ({ children }: Props) => {
	return <NickTemp>{children}</NickTemp>;
};

export const Level = ({ children }: Props) => {
	return <LevelTemp>{children}</LevelTemp>;
};
