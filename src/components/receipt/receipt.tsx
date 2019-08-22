//Packages
import * as React from 'react';

//Components
import { ItemDisplay } from '../item/item-display';
import { Currency } from '../layout/currency';

//Models
import { CartItemModel } from '../../models/cart/cart-item-model';

//Constants
import * as helpers from '../../shared/helpers';

//Styles
import classes from './receipt.module.scss';

//Interfaces
interface IReceiptProps {
    showTax?: boolean
}

export const Receipt: React.FC<IReceiptProps> = (props: any) =>
    <React.Fragment>
        <div>
            {
                props.items && props.items.length
                    ? props.items.map((item: CartItemModel) => 
                        <div className={classes.lineItem}>
                            <div>
                                <ItemDisplay
                                    id={item.id}
                                    name={`${item.name}${item.quantity > 0 ? ` (${item.quantity.toLocaleString()})` : ''}`}
                                    price={props.showTax ? item.finalPrice : item.listPrice}
                                    imported={item.imported}
                                    taxExempt={item.taxExempt}
                                />
                            </div>
                            {
                                props.showTax && 
                                <div className={classes.details}>
                                    <div>
                                        Price: <Currency value={item.listPrice} />
                                    </div>
                                    <div>
                                        Tax: <Currency value={item.salesTax} />
                                    </div>
                                </div>
                            }
                        </div>
                    ) 
                    : <i className={classes.lineItem}>No items in cart</i>
            }
        </div>
        <div className={`pt-3 ${classes.subtotal}`}>
            <div>
                Subtotal
            </div>
            <div>
                <Currency value={helpers.reducePropertyToNumber(props.items, 'listPrice')} />
            </div>
        </div>
        {
            props.showTax &&
            <React.Fragment>
                <div className={`${classes.subtotal}`}>
                    <div>
                        Total Tax
                    </div>
                    <div>
                        <Currency value={helpers.reducePropertyToNumber(props.items, 'salesTax')} />
                    </div>
                </div>
                <div className={`pt-4 ${classes.subtotal} ${classes.grandTotal}`}>
                    <div>
                        Order Total
                    </div>
                    <div>
                        <Currency value={helpers.reducePropertyToNumber(props.items, 'finalPrice')} />
                    </div>
                </div>
            </React.Fragment>
        }
    </React.Fragment>;