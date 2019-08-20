import { connect } from 'react-redux';
import { IItem } from '../../interfaces/item';
import { ICartBaseItem } from '../../interfaces/cart';
import { changeItemQuantity as updateCart } from '../../resources/cart/cart.actions';
import { ThunkDispatch } from 'redux-thunk';
import { ItemDisplay } from './item-display';

interface IItemDisplayContainerProps extends IItem { }

const mapStateToProps = (state: any, ownProps: IItemDisplayContainerProps) => {
    const cartItem = state.cartReducer.items.find((item: ICartBaseItem) => item.id === ownProps.id);
    return {
        quantity: cartItem ? cartItem.quantity : 0,
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    updateCart: (cartItem: ICartBaseItem) => dispatch(updateCart(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplay);