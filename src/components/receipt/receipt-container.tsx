//Packages
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

//Components
import { Receipt } from './receipt';

//Resources
import { clear } from '../../resources/cart/cart.actions';

//Models
import { CartItemModel } from '../../models/cart/cart-item-model';

//Interfaces
import { IItem } from '../../interfaces/item';
import { ICartBaseItem } from '../../interfaces/cart';

interface IReceiptContainerProps { }

const mapStateToProps = (state: any, ownProps: IReceiptContainerProps) => {
    return {
        items: state.cartReducer.items.map((cartItem: ICartBaseItem) => {
            const item = state.itemsReducer.items.find((item: IItem) => item.id === cartItem.id);
            return new CartItemModel(
                item.id,
                item.name,
                item.price,
                item.imported,
                item.taxExempt,
                cartItem.quantity
            );
        })
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    clear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);