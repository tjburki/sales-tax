//Packages
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

//Components
import { Catalogue } from './catalogue';

//Resources
import { getCategories } from '../../resources/categories/categories.actions';
import { getItems } from '../../resources/items/items.actions';

//Interfaces
import { ICategory } from '../../interfaces/category';
import { IItem } from '../../interfaces/item';
import { IAction } from '../../interfaces/store';

interface ICatalogueContainerProps {}

interface ICatalogueStateProps {
    categories: ICategory[],
    items: IItem[],
    isLoading: boolean,
    error: string
}

interface ICatalogueDispatchProps {
    getCategories: () => IAction,
    getItems: () => IAction
}

const mapStateToProps = (state: any, ownProps: ICatalogueContainerProps): ICatalogueStateProps => ({
    categories: state.categoriesReducer.categories,
    items: state.itemsReducer.items,
    isLoading: state.categoriesReducer.isLoading || state.itemsReducer.isLoading,
    error: [state.categoriesReducer.error, state.itemsReducer.error].join(' ')
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): ICatalogueDispatchProps => ({
    getCategories: () => dispatch(getCategories()),
    getItems: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);