import { IDispatchable } from '../../interfaces/store';
import { IItem } from '../../interfaces/item';
import { items } from '../../data';

interface IItemsReducerState {
    items: IItem[]
}

const defaultState: IItemsReducerState  = {
    items: items
};

const itemsReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        default:
            return {
                ...state
            };
    }
};

export default itemsReducer;