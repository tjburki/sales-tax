import * as categoryTypes from './categories.types';
import * as categoriesController from './categories.controller';
import { ThunkDispatch } from 'redux-thunk';

export const getCategories = () => async (dispatch: ThunkDispatch<{}, {}, any>) => {
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