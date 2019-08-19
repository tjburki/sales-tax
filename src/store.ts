import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import * as thunk from 'redux-thunk';
import * as categoriesReducer from './resources/categories/categories.reducer';

const reducers = combineReducers(categoriesReducer);

const middleware = [thunk];

export default createStore(reducers);//, applyMiddleware(...middleware));
