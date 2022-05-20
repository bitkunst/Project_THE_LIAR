import React from 'react';

export interface Props {
	children: React.ReactNode;
}

export interface UserType {
	isLogin: boolean;
}

export interface ActionType {
	type: string;
	payload: string;
}

export type MsgType = string;
