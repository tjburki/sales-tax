//Packages
import { ThunkDispatch } from 'redux-thunk';

//Resources
import * as categoriesTypes from './categories.types';

//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IAction } from '../../interfaces/store';
//import { ICategory } from '../../interfaces/category';

export const getCategories = (): IAction => (dispatch: ThunkDispatch<{}, {}, any>): void => {
    dispatch({ type: categoriesTypes.CATEGORIES_GET_REQUEST });

    dispatch({
        type: categoriesTypes.CATEGORIES_GET_SUCCESS,
        payload: constants.categories
    });

    // fetch(constants.categoriesUrl)
    //     .then((response: Response) => response.json())
    //     .then((categories: ICategory[]) => {
    //         dispatch({
    //             type: categoriesTypes.CATEGORIES_GET_SUCCESS,
    //             payload: categories
    //         });
    //     })
    //     .catch((error: any) => {
    //         dispatch({
    //             type: categoriesTypes.CATEGORIES_GET_FAILURE,
    //             payload: JSON.stringify(error)
    //         });
    //     });
}