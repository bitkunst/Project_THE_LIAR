import { AxiosRequestConfig } from 'axios';
import React from 'react';

export interface Props {
	children: React.ReactNode;
}

export interface NavType {
	to: string;
}

export interface UserType {
	me: {
		user_id: string;
		nickname: string;
		provider: string;
	};
	isLogin: boolean;
	error: number;
	loading: boolean;
}

export interface ActionType {
	type: string;
	payload: any;
}

export interface AxiosResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	headers: any;
	config: AxiosRequestConfig;
	request?: any;
}

export type MsgType = string;
