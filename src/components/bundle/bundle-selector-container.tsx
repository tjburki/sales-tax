import { connect } from 'react-redux';
import { BundleSelector } from './bundle-selector';

interface IBundleSelectorContainerProps { }

const mapStateToProps = (state: any, ownProps: IBundleSelectorContainerProps) => {
    return {
        bundles: state.bundlesReducer.bundles
    };
}

export default connect(mapStateToProps)(BundleSelector);