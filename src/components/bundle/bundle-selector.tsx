import * as React from 'react';
import classes from './bundle-selector.module.scss';
import { IBundle } from '../../interfaces/bundle';
import { bundles } from '../../data';

interface IBundleSelectorProps {
    
}

export const BundleSelector: React.FC<IBundleSelectorProps> = (props: IBundleSelectorProps) =>
    <div className={classes.container}>
        {
            bundles.map(bundle => <button className='btn btn-outline-dark'>{bundle.name}</button>)
        }
    </div>;