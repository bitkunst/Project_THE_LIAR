import { createAction, handleActions } from "redux-actions";
import { produce, produceWithPatches } from "immer";
import { UserType, ActionType } from "../types";
import { DRAFT_STATE } from "immer/dist/internal";

const initialState: UserType = {
  me: {
    user_id: "",
    nickname: "",
    provider: "",
    level:1
  },
  isLogin: false,
  error: 0,
  loading: false,
};

export const LOCAL_LOGIN_REQUEST = "USER/LOGIN_REQUEST";
export const LOCAL_LOGIN_SUCCESS = "USER/LOGIN_SUCCESS";
export const LOCAL_LOGIN_FAILURE = "USER/LOGIN_FAILURE";
export const KAKAO_LOGIN_REQUEST = "KAKAO/USER/LOGIN_REQUEST";
export const KAKAO_LOGIN_SUCCESS = "KAKAO/USER/LOGIN_SUCCESS";
export const KAKAO_LOGIN_FAILURE = "KAKAO/USER/LOGIN_FAILURE";

export const USER_LOGOUT = "USER/LOGOUT"

// export const USER_JOIN_REQUEST = 'USER/JOIN_REQUEST';
// export const USER_JOIN_SUCCESS = 'USER/JOIN_SUCCESS';
// export const USER_JOIN_FAILURE = 'USER/JOIN_FAILURE';

// export const user_join = createAction(USER_JOIN_REQUEST);
export const local_login = createAction(LOCAL_LOGIN_REQUEST);
export const local_logout = createAction(LOCAL_LOGIN_FAILURE);
export const kakao_login = createAction(KAKAO_LOGIN_REQUEST);

export const user_logout = createAction(USER_LOGOUT)

const user = handleActions(
  {
    // [USER_JOIN_REQUEST]: (state, action) =>
    // 	produce(state, (draft) => {
    // 		draft.isLogin = false;
    // 	}),
    // [USER_JOIN_SUCCESS]: (state, action) =>
    // 	produce(state, (draft) => {
    // 		draft.isLogin = false;
    // 		draft.error = 0;
    // 	}),
    // [USER_JOIN_FAILURE]: (state, action) =>
    // 	produce(state, (draft) => {
    // 		draft.error = 1;
    // 	}),
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
    [KAKAO_LOGIN_SUCCESS]: (state, action: ActionType) =>
      produce(state, (draft) => {
        console.log(action)
        draft.isLogin = true;
        draft.me = action.payload;
      }),
    [KAKAO_LOGIN_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.isLogin = false;
      }),
    [USER_LOGOUT]: (state, action:ActionType) =>
      produce(state, (draft) => {
        console.log(action)
        draft.me = action.payload
        draft.isLogin = false
      })
  },
  initialState
);

export default user;
