//Resources
import { items } from '../../store/data';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { IItem } from '../../interfaces/item';

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