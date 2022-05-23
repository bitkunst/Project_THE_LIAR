import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import randomGameSaga from './randomGameSaga';

export default function* rootSaga() {
	yield all([userSaga(), randomGameSaga()]);
}
