//Packages
import { connect } from 'react-redux';

//Components
import { BundleSelector } from './bundle-selector';

//Interfaces
interface IBundleSelectorContainerProps { }

const mapStateToProps = (state: any, ownProps: IBundleSelectorContainerProps) => {
    return {
        bundles: state.bundlesReducer.bundles
    };
}

export default connect(mapStateToProps)(BundleSelector);