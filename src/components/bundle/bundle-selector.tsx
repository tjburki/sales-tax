import * as React from 'react';
import classes from './bundle-selector.module.scss';
import { IBundle } from '../../interfaces/bundle';
import BundleContainer from './bundle-container';

interface IBundleSelectorProps {
    bundles: IBundle[]
}

export const BundleSelector: React.FC<IBundleSelectorProps> = (props: IBundleSelectorProps) =>
    <div className={classes.container}>
        {
            props.bundles.map(bundle => <BundleContainer {...bundle} />)
        }
    </div>;