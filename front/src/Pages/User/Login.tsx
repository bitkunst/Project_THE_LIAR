import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { ReducerType } from '../../reducers';
import { UserType, Nav } from '../../types';
import { local_login, local_logout } from '../../reducers/user';
import React from 'react';
import { useState, useEffect } from 'react';

const Login = ({ to }: Nav) => {
	const user = useSelector<ReducerType, UserType>((state) => {
		return state.user;
	});

	const initialstate = { user_id: '', user_pw: '' };
	const [values, setValues] = useState(initialstate);
	const [submit, setSubmit] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(local_login(values));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(e.target.value);
	};

	const handleLogout = () => {
		dispatch(local_logout('logout'));
	};

	useEffect(() => {
		if (user.isLogin === true) {
			navigate(to);
		}
	}, [user]);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>로그인</h3>
				<input
					type="text"
					name="user_id"
					onChange={handleChange}
				></input>

				<br />
				<input
					type="password"
					name="user_pw"
					onChange={handleChange}
				></input>

				<br />
				<input type="submit" value="로그인" disabled={submit}></input>
				<a href="http://localhost:4000/auth/kakao">카카오로그인</a>
			</form>
		</>
	);
};

export default Login;
