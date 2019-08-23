//Packages
import { ThunkDispatch } from 'redux-thunk';

//Resources
import * as cartTypes from './cart.types';

//Interfaces
import { ICartBaseItem } from '../../interfaces/cart';
import { IBundle } from '../../interfaces/bundle';
import { IDispatchable, IAction } from '../../interfaces/store';

export const changeItemQuantity = (cartItem: ICartBaseItem): IAction => (dispatch: ThunkDispatch<{}, {}, any>): IDispatchable => 
    dispatch({ type: cartTypes.CART_ITEM_CHANGE_QUANTITY, payload: cartItem });

export const clear = (): IAction => (dispatch: ThunkDispatch<{}, {}, any>): IDispatchable =>
    dispatch({ type: cartTypes.CART_CLEAR });

export const updateFromBundle = (bundle: IBundle): IAction => (dispatch: ThunkDispatch<{}, {}, any>): IDispatchable =>
    dispatch({ type: cartTypes.CART_UPDATE_FROM_BUNDLE, payload: bundle });