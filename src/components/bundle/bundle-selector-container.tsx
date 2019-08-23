//Packages
import { connect } from 'react-redux';

//Components
import { BundleSelector, IBundleSelectorProps } from './bundle-selector';

//Resources
import { getBundles } from '../../resources/bundles/bundles.actions';

//Interfaces
import { ThunkDispatch } from 'redux-thunk';

interface IBundleSelectorContainerProps { }

const mapStateToProps = (state: any, ownProps: IBundleSelectorContainerProps): IBundleSelectorProps => {
    return {
        ...state.bundlesReducer
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getBundles: () => dispatch(getBundles())
});


export default connect(mapStateToProps, mapDispatchToProps)(BundleSelector);