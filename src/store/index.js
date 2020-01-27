import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
