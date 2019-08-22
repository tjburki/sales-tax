//Packages
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

//Components
import { Checkout } from './checkout';

//Resources
import { clear } from '../resources/cart/cart.actions';

//Interfaces
interface IReceiptContainerProps { }

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    clear: () => dispatch(clear())
});

export default connect(null, mapDispatchToProps)(Checkout);