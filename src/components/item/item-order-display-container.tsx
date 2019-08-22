//Packages
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

//Components
import { ItemOrderDisplay } from './item-order-display';

//Resources
import { changeItemQuantity as updateCart } from '../../resources/cart/cart.actions';

//Interfaces
import { IItem } from '../../interfaces/item';
import { ICartBaseItem } from '../../interfaces/cart';

interface IItemOrderDisplayContainerProps extends IItem { }

const mapStateToProps = (state: any, ownProps: IItemOrderDisplayContainerProps) => {
    const cartItem = state.cartReducer.items.find((item: ICartBaseItem) => item.id === ownProps.id);
    return {
        quantity: cartItem ? cartItem.quantity : 0,
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    updateCart: (cartItem: ICartBaseItem) => dispatch(updateCart(cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemOrderDisplay);