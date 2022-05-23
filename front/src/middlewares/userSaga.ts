import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {
  LOCAL_LOGIN_REQUEST,
  LOCAL_LOGIN_SUCCESS,
  LOCAL_LOGIN_FAILURE,
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
  // USER_JOIN_REQUEST,
  // USER_JOIN_SUCCESS,
  // USER_JOIN_FAILURE,
} from "../reducers/user";
import { ActionType, AxiosResponse } from "../types";
import axios from "axios";

const loginAPI = async (payload: string) => {
  // back-end axios 요청
  console.log("이거", payload);
  const result = await axios.post(
    "http://localhost:4000/api/user/login",
    payload
  );
  return result;
};

function* loginReq(action: ActionType) {
  try {
    const response: AxiosResponse = yield call<any>(loginAPI, action.payload);
    console.log(response.data);
    yield put({
      type: LOCAL_LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: LOCAL_LOGIN_FAILURE,
      payload: "",
    });
  }
}

const kakaoAPI = async () => {
  console.log("gdgdgdgdg");
  const response = await axios.get("http://localhost:4000/auth/getInfo", {
    withCredentials: true
  });
  
  return response
};

function* kakaologReq(action: ActionType) {
  try {
    const response: AxiosResponse = yield call<any>(kakaoAPI);
    console.log(response)
    yield put({
      type: KAKAO_LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: KAKAO_LOGIN_FAILURE,
      payload: 1,
    });
  }
}
// const joinAPI = async (payload: string) => {
// 	console.log(payload);
// 	const result = await axios.post(
// 		'http://localhost:4000/api/user/join',
// 		payload,
// 		{
// 			headers: {
// 				'Content-type': 'application/json',
// 			},
// 		}
// 	);
// 	console.log(result);
// 	return result;
// };

// function* joinReq(action: ActionType) {
// 	try {
// 		const response: AxiosResponse = yield call<any>(
// 			joinAPI,
// 			action.payload
// 		);
// 		yield put({
// 			type: USER_JOIN_SUCCESS,
// 			payload: response.data,
// 		});
// 	} catch (err) {
// 		yield put({
// 			type: USER_JOIN_FAILURE,
// 			payload: '로그인 에러',
// 		});
// 	}
// }

// function* kakaologReq(action: ActionType) {}

export default function* userSaga() {
  yield takeLatest(LOCAL_LOGIN_REQUEST, loginReq);
  // yield takeLatest(USER_JOIN_REQUEST, joinReq);
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaologReq);
}
