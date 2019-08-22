//Packages
import { connect } from 'react-redux';

//Components
import { Catalogue, ICatalogueProps } from './catalogue';

interface ICatalogueContainerProps { }

const mapStateToProps = (state: any, ownProps: ICatalogueContainerProps): ICatalogueProps => ({
    categories: state.categoriesReducer.categories
});

export default connect(mapStateToProps)(Catalogue);