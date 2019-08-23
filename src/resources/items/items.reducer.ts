//Resources
import * as itemsTypes from './items.types';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { IItem } from '../../interfaces/item';

interface IItemsReducerState {
    items: IItem[],
    isLoading: boolean,
    error: string
}

const defaultState: IItemsReducerState  = {
    items: [],
    isLoading: false,
    error: ''
};

const itemsReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        case itemsTypes.ITEMS_GET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case itemsTypes.ITEMS_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                error: ''
            };
        case itemsTypes.ITEMS_GET_FAILURE:
            return {
                ...state,
                isLoading: true,
                items: [],
                error: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default itemsReducer;