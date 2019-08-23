//Packages
import { ThunkDispatch } from 'redux-thunk';

//Resources
import * as itemsTypes from './items.types';

//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IAction } from '../../interfaces/store';
import { IItem } from '../../interfaces/item';

export const getItems = (): IAction => (dispatch: ThunkDispatch<{}, {}, any>): void => {
    dispatch({ type: itemsTypes.ITEMS_GET_REQUEST });

    fetch(constants.itemsUrl)
        .then((response: Response) => response.json())
        .then((items: IItem[]) => {
            dispatch({
                type: itemsTypes.ITEMS_GET_SUCCESS,
                payload: items
            });
        })
        .catch((error: any) => {
            dispatch({
                type: itemsTypes.ITEMS_GET_FAILURE,
                payload: JSON.stringify(error)
            });
        });
}