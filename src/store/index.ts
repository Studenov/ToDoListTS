import {
  createStore, combineReducers, applyMiddleware,
  compose
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import { rootSagas } from './sagas';
import { authReduced } from './auth/reducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  dataAuth: authReduced
});

const userPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['dataAuth'],
  transforms: [
    createWhitelistFilter('dataAuth', ['token']),
    createTransform(
      state => state,
      state => Object.assign({}, state)
    ),
  ]
};

const persistedReducer = persistReducer(userPersistConfig, reducer);

const middleware = composeWithDevTools(
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      createLogger({ collapsed: true })
    )
  )
);

export const store = createStore(
  connectRouter(history)(persistedReducer),
  middleware
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
