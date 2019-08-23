//Resources
import * as bundlesTypes from './bundles.types';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { IBundle } from '../../interfaces/bundle';

export interface IBundlesReducerState {
    bundles: IBundle[],
    isLoading: boolean,
    error: string
}

const defaultState: IBundlesReducerState  = {
    bundles: [],
    isLoading: false,
    error: ''
};

const bundlesReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        case bundlesTypes.BUNDLES_GET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case bundlesTypes.BUNDLES_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                bundles: action.payload,
                error: ''
            };
        case bundlesTypes.BUNDLES_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                bundles: [],
                error: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default bundlesReducer;