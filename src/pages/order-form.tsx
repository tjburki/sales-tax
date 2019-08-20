import * as React from 'react';
import BundleSelectorContainer from '../components/bundle/bundle-selector-container';
import { Catalogue } from '../components/catalogue/catalogue';
import { Key } from '../components/key/key';
import CartContainer from '../components/cart/cart-container';

interface IOrderFormProps { }

export const OrderForm: React.FC<IOrderFormProps> = (props: IOrderFormProps) =>
    <div className='row'>
        <div className='offset-xl-1 col-xl-6 col-lg-8 col-xs-12'>
            <BundleSelectorContainer />
            <Catalogue />
            <div className='pt-3'>
            <Key />
            </div>
        </div>
        <div className='col-xl-4 col-lg-4 col-xs-12 pt-lg-0 pt-3'>
            <CartContainer />
        </div>
    </div>;