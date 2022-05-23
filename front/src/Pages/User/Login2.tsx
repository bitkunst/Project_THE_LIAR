import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Responsive } from '../../Components/Responsive';

const Title = styled.h1`
	text-align: center;
	height: 100px;
	padding: 40px 0px;
`;

const Login2 = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Responsive>
			<Title> Login </Title>
			<Form
				style={{
					padding: '40px 10px',
					overflow: 'hidden',
				}}
				name="basic"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 14 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="아이디"
					name="user_id"
					rules={[
						{
							required: true,
							message: '아이디를 입력해주세요!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="비밀번호"
					name="user_pw"
					rules={[
						{
							required: true,
							message: '비밀번호를 입력해주세요',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{ span: 12, offset: 6 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<Form.Item wrapperCol={{ span: 24 }}>
					<Button
						block
						type="primary"
						htmlType="submit"
						style={{
							background: '#000',
							border: 'solid 1px #000',
							height: '50px',
						}}
					>
						로그인
					</Button>
				</Form.Item>
			</Form>
		</Responsive>
	);
};

export default Login2;
