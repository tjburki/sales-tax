//Packages
import * as React from 'react';

//Components
import BundleContainer from './bundle-container';
import { ButtonRow } from '../layout/button-row';

//Interfaces
import { IBundle } from '../../interfaces/bundle';

interface IBundleSelectorProps {
    bundles: IBundle[]
}

export const BundleSelector: React.FC<IBundleSelectorProps> = (props: IBundleSelectorProps) =>
    <ButtonRow>
        {
            props.bundles.map(bundle => <BundleContainer {...bundle} />)
        }
    </ButtonRow>;