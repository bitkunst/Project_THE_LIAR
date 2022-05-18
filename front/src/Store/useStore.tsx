import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../middlewares';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { Props } from '../types';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer =
	process.env.NODE_ENV === 'production'
		? compose(applyMiddleware(...middleware))
		: composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const Store = ({ children }: Props) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	);
};

export default Store;
