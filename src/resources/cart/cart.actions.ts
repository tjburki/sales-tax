//Packages
import { ThunkDispatch } from 'redux-thunk';

//Resources
import * as cartTypes from './cart.types';

//Interfaces
import { ICartBaseItem } from '../../interfaces/cart';
import { IBundle } from '../../interfaces/bundle';

export const changeItemQuantity = (cartItem: ICartBaseItem) => (dispatch: ThunkDispatch<{}, {}, any>) => 
    dispatch({ type: cartTypes.CART_ITEM_CHANGE_QUANTITY, payload: cartItem });

export const clear = () => (dispatch: ThunkDispatch<{}, {}, any>) =>
    dispatch({ type: cartTypes.CART_CLEAR });

export const updateFromBundle = (bundle: IBundle) => (dispatch: ThunkDispatch<{}, {}, any>) =>
    dispatch({ type: cartTypes.CART_UPDATE_FROM_BUNDLE, payload: bundle });