//Data
import { categories } from '../../data/data';

//Interfaces
import { IDispatchable } from '../../interfaces/store';
import { ICategory } from '../../interfaces/category';

interface ICategoryReducerState {
    categories: ICategory[]
}

const defaultState: ICategoryReducerState = {
    categories: categories
};

const categoriesReducer = (state = defaultState, action: IDispatchable) => {
    switch(action.type) {
        default:
            return {
                ...state
            };
    }
};

export default categoriesReducer;