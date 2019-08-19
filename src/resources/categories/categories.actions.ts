import * as categoryTypes from './categories.types';
import * as categoriesController from './categories.controller';
import { IDispatch } from '../../interfaces/store';

export const getCategories = () => async (dispatch: ({}: IDispatch) => void) => {
    dispatch({ type: categoryTypes.ITEMS_GET_REQUEST });

    try {
        dispatch({
            type: categoryTypes.ITEMS_GET_SUCCESS,
            payload: await categoriesController.getCategories()
        });
    }
    catch(error) {
        dispatch({
            type: categoryTypes.ITEMS_GET_FAILURE,
            payload: error
        });
    }
}