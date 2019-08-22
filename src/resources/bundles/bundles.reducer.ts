//Data
import { bundles } from '../../data';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { IBundle } from '../../interfaces/bundle';

interface IBundlesReducerState {
    bundles: IBundle[]
}

const defaultState: IBundlesReducerState  = {
    bundles: bundles
};

const bundlesReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        default:
            return {
                ...state
            };
    }
};

export default bundlesReducer;