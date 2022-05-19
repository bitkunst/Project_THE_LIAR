import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../reducers';
import { UserType } from '../../types';
import { login, logout } from '../../reducers/user';

import React from 'react';
import { Link } from 'react-router-dom';

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
				<Link to="/user/profile">
					<button onClick={handleLogout}>로그아웃</button>
				</Link>
			) : (
				<Link to="/user/profile">
					<button onClick={handleLogin}>로그인</button>
				</Link>
			)}
		</>
	);
};

export default Login;
