import { takeLatest, call, put } from 'redux-saga/effects';
import {
	RANDOM_GAME_REQUEST,
	RANDOM_GAME_SUCCESS,
	RANDOM_GAME_FAILURE,
	MY_TURN,
} from '../reducers/randomGame';

import { ActionType, AxiosResponse } from '../types';
import { UserInfoType } from '../types/gameTypes';

const gameAPI = (): boolean => {
	return true;
};

function* gameReq(action: ActionType) {
	try {
		const payload: UserInfoType = action.payload;
		yield call<any>(gameAPI, payload);
	} catch (err) {
		yield put({
			type: RANDOM_GAME_FAILURE,
			payload: 1,
		});
	}
}

export default function* randomGameSaga() {
	yield takeLatest(RANDOM_GAME_REQUEST, gameReq);
}
