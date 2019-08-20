import { connect } from 'react-redux';
import { Cart } from './cart';
import { ThunkDispatch } from 'redux-thunk';
import { clear } from '../../resources/cart/cart.actions';
import { ICartBaseItem } from '../../interfaces/cart';
import { IItem } from '../../interfaces/item';

interface ICartContainerProps { }

const mapStateToProps = (state: any, ownProps: ICartContainerProps) => {
    return {
        items: state.cartReducer.items.map((cartItem: ICartBaseItem) => ({
            ...cartItem,
            ...state.itemsReducer.items.find((item: IItem) => item.id === cartItem.id)
        })),
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    clear: () => {
        if (window.confirm('Are you sure you want to remove all items from your cart?')) {
            dispatch(clear());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);