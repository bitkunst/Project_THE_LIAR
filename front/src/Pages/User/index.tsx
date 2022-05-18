import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../reducers';
import { UserType } from '../../types';
import { login, logout } from '../../reducers/user';

import React from 'react';

const Login = () => {
	const user = useSelector<ReducerType, UserType>((state) => {
		return state.user;
	});

	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login('web7722'));
	};

	const handleLogout = () => {
		dispatch(logout('logout'));
	};

	return (
		<>
			{user.isLogin ? (
				<button onClick={handleLogout}>로그아웃</button>
			) : (
				<button onClick={handleLogin}>로그인</button>
			)}
		</>
	);
};

export default Login;
