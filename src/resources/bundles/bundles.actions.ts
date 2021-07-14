//Packages
import { ThunkDispatch } from 'redux-thunk';

//Resources
import * as bundlesTypes from './bundles.types';

//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IAction } from '../../interfaces/store';
//import { IBundle } from '../../interfaces/bundle';

export const getBundles = (): IAction => (dispatch: ThunkDispatch<{}, {}, any>): void => {
    dispatch({ type: bundlesTypes.BUNDLES_GET_REQUEST });

    dispatch({
        type: bundlesTypes.BUNDLES_GET_SUCCESS,
        payload: constants.bundles
    });

    // fetch(constants.bundlesUrl)
    //     .then((response: Response) => response.json())
    //     .then((bundles: IBundle[]) => {
    //         dispatch({
    //             type: bundlesTypes.BUNDLES_GET_SUCCESS,
    //             payload: bundles
    //         });
    //     })
    //     .catch((error: any) => {
    //         dispatch({
    //             type: bundlesTypes.BUNDLES_GET_FAILURE,
    //             payload: JSON.stringify(error)
    //         });
    //     });
}