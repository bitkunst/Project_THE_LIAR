import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import randomGame from './randomGame';

const persistConfig = {
	key: 'user',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user,
	randomGame,
});

export default persistReducer(persistConfig, rootReducer);

export type ReducerType = ReturnType<typeof rootReducer>;
