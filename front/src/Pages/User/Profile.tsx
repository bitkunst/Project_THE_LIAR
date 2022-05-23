import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReducerType } from "../../reducers";
import { UserType } from "../../types";
import { useEffect } from "react";
import { kakao_login,user_logout } from "../../reducers/user";

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
    <div>
      <Link to="/play">게임 시작하기</Link>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Profile;
