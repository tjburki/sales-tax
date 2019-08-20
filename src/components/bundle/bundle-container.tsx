import { connect } from 'react-redux';
import { Bundle, IBundleProps } from './bundle';
import { IBundle } from '../../interfaces/bundle';
import { ThunkDispatch } from 'redux-thunk';
import { updateFromBundle } from '../../resources/cart/cart.actions';

interface IBundleContainerProps extends IBundle { }

export interface IBundleDispatchProps {
    updateCart: (e: React.MouseEvent) => any
}

const mapStateToProps = (state: any, ownProps: IBundleContainerProps): IBundleProps => {
    return {
        ...state.bundlesReducer.bundles.find((bundle: IBundle) => bundle.name === ownProps.name),
        cartHasItems: !!state.cartReducer.items.length
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: IBundleContainerProps): IBundleDispatchProps => ({
    updateCart: (e: React.MouseEvent) => dispatch(updateFromBundle(ownProps))
});


export default connect(mapStateToProps, mapDispatchToProps)(Bundle);