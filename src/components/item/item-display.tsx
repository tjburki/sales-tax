import * as React from 'react';
import classes from './item-display.module.scss';
import { IItem } from '../../interfaces/item';
import { ICartBaseItem } from '../../interfaces/cart';
import { formatCurrency } from '../../helpers';
import { Currency } from '../layout/currency';

interface IItemDisplayProps extends IItem, ICartBaseItem {
    updateCart: (cartItem: ICartBaseItem) => any
}

export const ItemDisplay: React.FC<IItemDisplayProps> = (props: IItemDisplayProps) =>
    <div className={classes.container}>
        <div className={classes.order}>
            <div>
                <input 
                    type="number" 
                    className='form-control' 
                    min="0" 
                    placeholder='#' 
                    pattern="[0-9]*"
                    style={{width: 75, marginRight: 10}} 
                    value={props.quantity <= 0 ? '' : props.quantity}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        let quantity = parseInt(e.currentTarget.value);
                        props.updateCart({
                            id: props.id,
                            quantity: isNaN(quantity) ? 0 : quantity
                        });
                    }}
                />
            </div>
            <div>
                {props.name} {props.imported && '(Import**)'}
            </div> 
        </div>
        <div>
            <Currency value={props.price} />
        </div>
    </div>;