//Packages
import * as React from 'react';

//Components
import { NumberInput } from '../layout/number-input';

//Styles
import classes from './item-order-display.module.scss';

//Interfaces
import { IItem } from '../../interfaces/item';
import { ICartBaseItem } from '../../interfaces/cart';
import { ItemDisplay } from './item-display';

interface IItemOrderDisplayProps extends IItem, ICartBaseItem {
    updateCart: (cartItem: ICartBaseItem) => void
}

export const ItemOrderDisplay: React.FC<IItemOrderDisplayProps> = (props: IItemOrderDisplayProps) =>
    <div className={classes.container}>
        <div className={classes.order}>
            <div className={classes.input}>
                <NumberInput
                    value={props.quantity <= 0 ? '' : props.quantity}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        let quantity = parseInt(e.currentTarget.value);
                        props.updateCart({
                            id: props.id,
                            quantity: isNaN(quantity) ? 0 : quantity
                        });
                    }}
                    min={0}
                />
            </div>
        </div>
        <ItemDisplay 
            id={props.id} 
            name={props.name} 
            price={props.price} 
            imported={props.imported} 
            taxExempt={props.taxExempt} 
        />
    </div>;