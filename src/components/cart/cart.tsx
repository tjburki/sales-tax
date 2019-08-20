import * as React from 'react';
import classes from './cart.module.scss';
import { Section } from '../layout/section';
import { Icon } from '../layout/icon';
import { ICart } from '../../interfaces/cart';
import { ICartItem } from '../../interfaces/cart';
import { Currency } from '../layout/currency';
import { Link } from 'react-router-dom';

interface ICartProps extends ICart {
    clear: () => void
}

export const Cart: React.FC<ICartProps> = (props: ICartProps) =>
    <div className={classes.container}>
        <Section title={`Cart (${props.items.reduce((a: number, b: ICartItem) => a + b.quantity, 0)})`} icon='shopping-cart'>
            <div className={classes.body}>
                <div>
                    {
                        props.items && props.items.length
                            ? props.items.map((item: ICartItem) => 
                                <div className={classes.lineItem}>
                                    <div>
                                        {item.name} ({item.quantity})
                                    </div>
                                    <div>
                                        <Currency value={item.quantity * item.price} />
                                    </div>
                                </div>
                            ) 
                            : <i className={classes.lineItem}>No items in cart</i>
                    }
                </div>
                <div className={`py-3 ${classes.subtotal}`}>
                    <div>
                        Subtotal
                    </div>
                    <div>
                        <Currency value={props.items.reduce(
                            (a: number, b: ICartItem) => a + (b.quantity * b.price),
                            0
                        )} />
                    </div>
                </div>
                <div className={`row ${classes.buttons}`}>
                    <div className='col-sm-5'>
                        <button className='btn btn-outline-dark' disabled={!props.items.length} onClick={props.clear}>
                            <Icon type='times' /> Clear
                        </button>
                    </div>
                    <div className='col-sm-7 text-right'>
                        <Link to='/checkout'>
                            <button className='btn btn-outline-primary' disabled={!props.items.length}>
                                <Icon type='credit-card' /> Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    </div>;