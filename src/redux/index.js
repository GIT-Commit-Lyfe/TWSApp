import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import user from './user';
import notification from './notification';

const middlewares = __DEV__ ? [thunk, logger] : [thunk];
const appReducer = combineReducers({
  user,
  notification,
});
const store = createStore(appReducer, applyMiddleware(...middlewares));

export default store;
