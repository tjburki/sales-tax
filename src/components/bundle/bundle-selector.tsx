//Packages
import * as React from 'react';

//Components
import BundleContainer from './bundle-container';
import { ButtonRow } from '../layout/button-row';
import { ErrorDisplay } from '../layout/error-display';

//Interfaces
import { IBundle } from '../../interfaces/bundle';
import { IBundlesReducerState } from '../../resources/bundles/bundles.reducer';
import { Spinner } from '../layout/spinner';

export interface IBundleSelectorProps extends IBundlesReducerState {
    getBundles: () => IBundle[]
}

export class BundleSelector extends React.Component<IBundleSelectorProps> {
    componentDidMount() {
        this.props.getBundles();
    }

    render() {
        const { bundles, isLoading, error = 'An unknown error occurred retrieving baskets' } = this.props;

        return (
            <React.Fragment>
                {
                    bundles && bundles.length
                        ?   <ButtonRow>
                                {
                                    bundles.map((bundle: IBundle) => 
                                        <BundleContainer 
                                            key={bundle.name}
                                            name={bundle.name}
                                            items={bundle.items}
                                        />
                                    )         
                                }
                            </ButtonRow>
                        :   isLoading
                            ?   <Spinner />
                            :   <ErrorDisplay text={error} />
                }
            </React.Fragment>
        );
    }
}