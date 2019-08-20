import * as categoryTypes from './categories.types';
import { IDispatchable } from '../../interfaces/store';

const defaultState = {
    categories: [],
    loadInProgress: false,
    error: ''
};

const categoriesReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        case categoryTypes.ITEMS_GET_REQUEST:
            return {
                ...state,
                loadInProgress: true
            };
        case categoryTypes.ITEMS_GET_SUCCESS:
            return {
                ...state,
                loadInProgress: false,
                categories: action.payload
            };
        case categoryTypes.ITEMS_GET_FAILURE:
            return {
                ...state,
                loadInProgress: false,
                categories: [],
                error: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default categoriesReducer;