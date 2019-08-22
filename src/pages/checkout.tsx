//Packages
import * as React from 'react';

//Components
import { Link } from 'react-router-dom';
import ReceiptContainer from '../components/receipt/receipt-container';
import { Icon } from '../components/layout/icon';
import { ButtonRow } from '../components/layout/button-row';

//Interfaces
import { ICartClearer } from '../interfaces/cart';

interface ICheckoutProps extends ICartClearer { }

export const Checkout: React.FC<ICheckoutProps> = (props: ICheckoutProps) =>
    <div className='row'>
        <div className='offset-xl-3 col-xl-6 offset-md-2 col-md-8 col-12'>
            <div>
                <ReceiptContainer showTax />
            </div>
            <div className='pt-3'>
                <ButtonRow>
                    <Link to='/'>
                        <button className='btn btn-outline-dark'>
                            <Icon type='arrow-left' />Back to Order
                        </button>
                    </Link>
                    <Link to='/confirmation' onClick={props.clear}>
                        <button className='btn btn-outline-primary'>
                            <Icon type='check' />Confirm Order
                        </button>
                    </Link>
                </ButtonRow>
            </div>
        </div>
    </div>;