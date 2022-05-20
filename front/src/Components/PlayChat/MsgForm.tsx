import React from 'react';
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
import './msg.css';

const MsgForm = () => {
	const [value, setValue] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="msg-input"
				placeholder="거짓말해보세요"
				value={value}
				onChange={handleChange}
			/>
			<button type="submit" className="send-btn">
				<SendOutlined className="send-icon" />
			</button>
		</form>
	);
};

export default MsgForm;
