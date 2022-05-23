import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ReducerType } from "../../reducers";
import { UserType } from "../../types";
// import { user_join } from "../../reducers/user";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Join = () => {
  const user = useSelector<ReducerType, UserType>((state) => {
    return state.user;
  });

  const navigate = useNavigate();
  const initialstate = { user_id: "", user_pw: "", nickname: "" };
  const [values, setValues] = useState(initialstate);
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result = axios.post("http://localhost:4000/api/user/join", values,{
        headers:{
            'Content-Type':'application/json'
        }
    });
    console.log(result);
    alert("회원가입이 완료되었습니다.");
    navigate("/user");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <label>아이디</label>
        <input type="text" name="user_id" onChange={handleChange} />
        <br />
        <label>비밀번호</label>
        <input type="password" name="user_pw" onChange={handleChange} />

        <br />
        <label>닉네임</label>
        <input type="text" name="nickname" onChange={handleChange} />
        <br />
        <input type="submit" value="회원가입" />
      </form>
    </>
  );
};

export default Join;
