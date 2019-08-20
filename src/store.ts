import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from './resources/items/items.reducer';
import categoriesReducer from './resources/categories/categories.reducer';
import cartReducer from './resources/cart/cart.reducer';
import bundlesReducer from './resources/bundles/bundles.reducer';

const reducers = combineReducers({
    itemsReducer,
    categoriesReducer,
    cartReducer,
    bundlesReducer
});

const middleware = [thunk];

export default createStore(reducers, applyMiddleware(...middleware));