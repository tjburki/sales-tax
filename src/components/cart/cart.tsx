import * as React from 'react';
import classes from './cart.module.scss';
import { Section } from '../layout/section';
import { Icon } from '../layout/icon';

interface ICartProps {
    
}

export const Cart: React.FC<ICartProps> = (props: ICartProps) =>
    <div className={classes.container}>
        <Section title={`Cart (${0})`} icon='shopping-cart'>
            <div className={classes.body}>
                <div>
                    <i>No items in cart</i>
                </div>
                <div className={`row ${classes.buttons}`}>
                    <div className='col-sm-6'>
                        <button className='btn btn-outline-dark' disabled={true}>
                            <Icon type='times' /> Clear
                        </button>
                    </div>
                    <div className='col-sm-6 text-right'>
                        <button className='btn btn-outline-primary' disabled={true}>
                            <Icon type='credit-card' /> Checkout
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    </div>;