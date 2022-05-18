import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { UserType } from '../types';

const initialState: UserType = {
	isLogin: false,
};

export const LOGIN_REQUEST = 'USER/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USER/LOGIN_FAILURE';

export const login = createAction(LOGIN_REQUEST);
export const logout = createAction(LOGIN_FAILURE);

const user = handleActions(
	{
		[LOGIN_REQUEST]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
		[LOGIN_SUCCESS]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = true;
			}),
		[LOGIN_FAILURE]: (state, action) =>
			produce(state, (draft) => {
				draft.isLogin = false;
			}),
	},
	initialState
);

export default user;
