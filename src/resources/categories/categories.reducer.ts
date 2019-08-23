//Resources
import * as categoriesTypes from './categories.types';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { ICategory } from '../../interfaces/category';

export interface ICategoryReducerState {
    categories: ICategory[],
    isLoading: boolean,
    error: string
}

const defaultState: ICategoryReducerState = {
    categories: [],
    isLoading: false,
    error: ''
};

const categoriesReducer = (state = defaultState, action: IDispatchable): ICategoryReducerState => {
    switch(action.type) {
        case categoriesTypes.CATEGORIES_GET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case categoriesTypes.CATEGORIES_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            };
        case categoriesTypes.CATEGORIES_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
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