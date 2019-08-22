//Packages
import * as React from 'react';

//Components
import { Section } from '../layout/section';
import { Link } from 'react-router-dom';
import ReceiptContainer from '../receipt/receipt-container';
import { ButtonRow } from '../layout/button-row';

//Shared
import * as helpers from '../../shared/helpers';

//Styles
import classes from './cart.module.scss';

//Interfaces
import { Icon } from '../layout/icon';
import { ICart, ICartClearer } from '../../interfaces/cart';

interface ICartProps extends ICart, ICartClearer { }

export const Cart: React.FC<ICartProps> = (props: ICartProps) =>
    <div className={classes.container}>
        <Section title={`Cart (${helpers.reducePropertyToNumber(props.items, 'quantity').toLocaleString()})`} icon='shopping-cart'>
            <div className={classes.body}>
                <div>
                    <ReceiptContainer />
                </div>
                <div className='pt-3'>
                    <ButtonRow>
                        <button className='btn btn-outline-dark' disabled={!props.items.length} onClick={props.clear}>
                            <Icon type='times' />Clear
                        </button>
                        <Link to='/checkout'>
                            <button className='btn btn-outline-primary' disabled={!props.items.length}>
                                <Icon type='credit-card' />Checkout
                            </button>
                        </Link>
                    </ButtonRow>
                </div>
            </div>
        </Section>
    </div>;