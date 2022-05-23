import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ReducerType } from "../../reducers";
import { UserType } from "../../types";
import { local_login, local_logout } from "../../reducers/user";
import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const user = useSelector<ReducerType, UserType>((state) => {
    return state.user;
  });
  const initialstate = { user_id: "", user_pw: "" };
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
  };

  useEffect(() => {
    if (user.isLogin === true) {
      navigate("/user/profile");
      alert("로그인을 성공하셨습니다");
    }
  }, [user.isLogin]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>로그인</h3>
        <input type="text" name="user_id" onChange={handleChange}></input>

        <br />
        <input type="password" name="user_pw" onChange={handleChange}></input>

        <br />
        <input type="submit" value="로그인" disabled={submit}></input>
        <a href="http://localhost:4000/auth/kakao">카카오로그인</a>
      </form>
      <Link to="/user/join">회원가입</Link>
    </>
  );
};

export default Login;
