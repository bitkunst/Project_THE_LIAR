import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/user';
import { ActionType } from '../types';

const loginAPI = async (payload: string): Promise<boolean> => {
	// back-end axios 요청
	const response: boolean = await new Promise((resolve) => {
		setTimeout(() => {
			if (payload === 'web7722') {
				resolve(true);
			}
		}, 2000);
	});
	return response;
};

function* loginReq(action: ActionType) {
	try {
		const result: ReturnType<typeof loginAPI> = yield call(
			loginAPI,
			action.payload
		);
		console.log(result);
		yield put<ActionType>({
			type: LOGIN_SUCCESS,
			payload: '',
		});
	} catch (err) {
		yield put<ActionType>({
			type: LOGIN_FAILURE,
			payload: '',
		});
	}
}

export default function* userSaga() {
	yield takeLatest(LOGIN_REQUEST, loginReq);
}
