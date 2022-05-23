import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {
  LOCAL_LOGIN_REQUEST,
  LOCAL_LOGIN_SUCCESS,
  LOCAL_LOGIN_FAILURE,
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
} from "../reducers/user";
import { ActionType, AxiosResponse } from "../types";
import axios from "axios";

const loginAPI = async (payload: string) => {
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

export default function* userSaga() {
  yield takeLatest(LOCAL_LOGIN_REQUEST, loginReq);
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaologReq);
}