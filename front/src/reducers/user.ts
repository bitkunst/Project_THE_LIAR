import { createAction, handleActions } from 'redux-actions';
import { produce, produceWithPatches } from 'immer';
import { UserType, ActionType } from '../types';

const initialState: UserType = {
	me: {
		user_id: '',
		nickname: '',
		provider: '',
	},
	isLogin: false,
	error: 0,
	loading: false,
};

export const LOCAL_LOGIN_REQUEST = 'USER/LOGIN_REQUEST';
export const LOCAL_LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
export const LOCAL_LOGIN_FAILURE = 'USER/LOGIN_FAILURE';
export const KAKAO_LOGIN_REQUEST = 'KAKAO/USER/LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = 'KAKAO/USER/LOGIN_SUCCESS';
export const KAKAO_LOGIN_FAILURE = 'KAKAO/USER/LOGIN_FAILURE';

export const local_login = createAction(LOCAL_LOGIN_REQUEST);
export const local_logout = createAction(LOCAL_LOGIN_FAILURE);
export const kakao_login = createAction(KAKAO_LOGIN_REQUEST);

const user = handleActions(
	{
		[LOCAL_LOGIN_REQUEST]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
		[LOCAL_LOGIN_SUCCESS]: (state, action: ActionType) =>
			produce(state, (draft) => {
				draft.isLogin = true;
				draft.me = action.payload;
			}),
		[LOCAL_LOGIN_FAILURE]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
		[KAKAO_LOGIN_REQUEST]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
		[KAKAO_LOGIN_SUCCESS]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = true;
			}),
		[KAKAO_LOGIN_FAILURE]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
	},
	initialState
);

export default user;
