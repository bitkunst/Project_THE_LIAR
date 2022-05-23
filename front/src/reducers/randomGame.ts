import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { GameType } from '../types/gameTypes';
import { ActionType } from '../types';

const initialState: GameType = {
	gameErr: 0,
	isLoading: false,
	isStart: false,
	myTurn: false,
	howMany: 0,
	mySocket: null,
};

export const RANDOM_GAME_REQUEST = 'RANDOM/GAME_REQUEST';
export const RANDOM_GAME_SUCCESS = 'RANDOM/GAME_SUCCESS';
export const RANDOM_GAME_FAILURE = 'RAMDOM/GAME_FAILURE';
export const MY_TURN = 'MY/TURN';

export const random_game_request = createAction(RANDOM_GAME_REQUEST);
export const random_game_success = createAction(RANDOM_GAME_SUCCESS);
export const random_game_failure = createAction(RANDOM_GAME_FAILURE);

const randomGame = handleActions(
	{
		[RANDOM_GAME_REQUEST]: (state, action: ActionType) =>
			produce(state, (draft: GameType) => {
				draft.isLoading = true;
				draft.mySocket = action.payload.socket;
				draft.howMany = action.payload.howMany;
			}),
		[RANDOM_GAME_SUCCESS]: (state, action: ActionType) =>
			produce(state, (draft: GameType) => {
				draft.isStart = true;
			}),
		[RANDOM_GAME_FAILURE]: (state, action: ActionType) =>
			produce(state, (draft: GameType) => {
				draft.gameErr = action.payload;
			}),
		[MY_TURN]: (state, action: ActionType) =>
			produce(state, (draft: GameType) => {
				draft.myTurn = true;
			}),
	},
	initialState
);

export default randomGame;
