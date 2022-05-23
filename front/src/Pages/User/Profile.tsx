import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Responsive, ResponsiveTemplate } from '../../Components/Responsive';
import { Title } from '../../Components/Title';
import './profile.css';

const ResponsiveFlex = styled(ResponsiveTemplate)`
	display: flex;
	height: 100vh;

	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Profile = () => {
	return (
		<Responsive>
			<Title>MY PROFILE</Title>
			<ResponsiveFlex>
				<div className="profile-thumb">
					<div className="profile-img-wrap">
						<img src="/img/tiger.png" className="profile-img" />
					</div>
					<p className="profile-level">
						level.4 대한민국 최고 거짓말쟁이
					</p>
				</div>
				<ul className="profile-detail">
					<li className="profile-list">
						<span className="profile-article">아이디 :</span>
						<span className="profile-content">id들어갈 자리</span>
					</li>
					<li className="profile-list">
						<span className="profile-article">닉네임 :</span>
						<span className="profile-content">
							닉네임 들어갈 자리
						</span>
					</li>
					<li className="link-group">
						<Link to="/user/profile/update" className="link-btn">
							프로필 관리
						</Link>
						<Link to="/user/myfriends" className="link-btn">
							친구 관리
						</Link>
						<Link to="/play" className="link-btn-red">
							게임 시작하기
						</Link>
					</li>
				</ul>
			</ResponsiveFlex>
		</Responsive>
	);
};

export default Profile;
