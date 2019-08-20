import { IDispatchable } from '../../interfaces/store';
import { bundles } from '../../data';
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