import * as React from 'react';
import classes from './item-display.module.scss';
import { IItem } from '../../interfaces/item';
import { formatCurrency } from '../../helpers';

interface IItemDisplayProps extends IItem {

}

export const ItemDisplay: React.FC<IItemDisplayProps> = (props: IItemDisplayProps) =>
    <div className={classes.container}>
        <div className={classes.order}>
            <div>
                <input type="number" className='form-control' min="0" placeholder='#' style={{width: 75, marginRight: 10}} />
            </div>
            <div>
                {props.name} {props.imported && '(Import)'}
            </div> 
        </div>
        <div>{formatCurrency(props.price)}</div>
    </div>;