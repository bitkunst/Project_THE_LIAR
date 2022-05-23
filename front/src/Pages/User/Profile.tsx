import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { Responsive, ResponsiveTemplate } from '../../Components/Responsive';
import './profile.css';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReducerType } from "../../reducers";
import { UserType } from "../../types";
import { kakao_login,user_logout } from "../../reducers/user";

const ResponsiveFlex = styled(ResponsiveTemplate)`
	display: flex;
	height: 100vh;

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const Profile = () => {
  const user = useSelector<ReducerType, UserType>((state) => {
    return state.user;
  });
  const initialstate = { user_id: "", nickname:"",provider:"", level:0};
  console.log(user)
  useEffect(() => {
    if (user.isLogin === false) {
      dispatch(kakao_login());
    }
  }, [user]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(user_logout(initialstate))
    alert('로그아웃 되었습니다.')
    navigate('/user')
  }

	return (
		<Responsive>
			<h1>MY PROFILE</h1>
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
    <div>
      <button onClick={logout}>로그아웃</button>
    </div>
		</Responsive>

	);
};

export default Profile;
