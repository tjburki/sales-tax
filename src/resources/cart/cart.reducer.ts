//Resources
import * as cartTypes from './cart.types';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { ICartBaseItem } from '../../interfaces/cart';

interface ICartState {
    items: ICartBaseItem[]
}

const defaultState: ICartState = {
    items: []
};

const cartReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        case cartTypes.CART_ITEM_CHANGE_QUANTITY:
            const updateItem = action.payload as ICartBaseItem;

            let newItems = [...state.items];
            let existingItem = newItems.find((item: ICartBaseItem) => item.id === updateItem.id);

            if (existingItem && updateItem.quantity > 0) { 
                //Item exists in the cart and has a positive quantity, update the quantity
                existingItem.quantity = updateItem.quantity;
            }
            else if (existingItem) { 
                //The item exists but now has 0 quantity, remove from cart
                newItems = newItems.filter((item: ICartBaseItem) => item.id !== updateItem.id);
            }
            else if (updateItem.quantity > 0) { 
                //Add item to the cart if there is a quantity
                newItems.push(updateItem);
            }

            return {
                ...state,
                items: newItems
            };
        case cartTypes.CART_CLEAR:
            return {
                ...state,
                items: []
            };
        case cartTypes.CART_UPDATE_FROM_BUNDLE:
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return {
                ...state
            };
    }
};

export default cartReducer;