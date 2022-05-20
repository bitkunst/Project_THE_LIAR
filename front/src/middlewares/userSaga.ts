import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import {
	LOCAL_LOGIN_REQUEST,
	LOCAL_LOGIN_SUCCESS,
	LOCAL_LOGIN_FAILURE,
	KAKAO_LOGIN_REQUEST,
	KAKAO_LOGIN_SUCCESS,
	KAKAO_LOGIN_FAILURE,
} from '../reducers/user';
import { ActionType, AxiosResponse, LoginData } from '../types';
import axios from 'axios';

const loginAPI = async (payload: LoginData) => {
	// back-end axios 요청
	const result: AxiosResponse = await axios.post(
		'http://localhost:4000/api/user/login',
		payload,
		{
			headers: {
				'Content-type': 'application/json',
			},
		}
	);
	console.log(result);
	return result;
};

function* loginReq(action: ActionType) {
	try {
		const response: AxiosResponse = yield call<any>(
			loginAPI,
			action.payload
		);
		console.log(response.data);
		yield put({
			type: LOCAL_LOGIN_SUCCESS,
			payload: response.data,
		});
	} catch (err) {
		yield put({
			type: LOCAL_LOGIN_FAILURE,
			payload: '',
		});
	}
}

// function* kakaologReq(action: ActionType) {}

export default function* userSaga() {
	yield takeLatest(LOCAL_LOGIN_REQUEST, loginReq);
	// console.log('gdgd');
	// yield takeLatest(KAKAO_LOGIN_REQUEST, kakaologReq);
}
