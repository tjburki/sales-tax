//Packages
import * as React from 'react';

//Components
import { IItem } from '../../interfaces/item';
import { Currency } from '../layout/currency';

//Styles
import classes from './item-display.module.scss';

//Constants
import * as constants from '../../shared/constants';

//Interfaces
interface IItemDisplayProps extends IItem { }

export const ItemDisplay: React.FC<IItemDisplayProps> = (props: IItemDisplayProps) =>
    <div className={classes.container}>
        <span>
            {props.name}{props.imported ? constants.importedMarker : ''}{props.taxExempt ? constants.taxExemptMarker : ''}
        </span> 
        <span>
            <Currency value={props.price} />
        </span>
    </div>;