import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from 'reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
