import { takeLatest, call, put } from 'redux-saga/effects';
import {
	RANDOM_GAME_REQUEST,
	RANDOM_GAME_SUCCESS,
	RANDOM_GAME_FAILURE,
	MY_TURN,
} from '../reducers/randomGame';

import { ActionType, AxiosResponse } from '../types';
import { GameActionType } from '../types/gameTypes';
import { ReducerType } from '../reducers';
import { GameType } from '../types/gameTypes';
import { useSelector } from 'react-redux';

const gameAPI = (payload: GameActionType) => {
	let result = false;
	payload.mySocket.on('start', (data: any) => {
		result = data.isStart;
	});
	return result;
};

function* gameReq(action: ActionType) {
	console.log('hi');
	console.log(action);
	try {
		const payload: GameActionType = action.payload;
		console.log(payload);
		const response: boolean = yield call<any>(gameAPI, payload);

		if (response == true) {
			yield put({
				type: RANDOM_GAME_SUCCESS,
				payload: 0,
			});
		}
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
