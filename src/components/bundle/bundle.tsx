import * as React from 'react';
import { IBundle } from '../../interfaces/bundle';
import { IBundleDispatchProps } from './bundle-container';

export interface IBundleProps extends IBundle, IBundleDispatchProps { 
    cartHasItems: boolean
}

export const Bundle: React.FC<IBundleProps> = (props: IBundleProps) =>
    <button 
        className='btn btn-outline-dark' 
        onClick={(e: React.MouseEvent) => {
            //If the user has something in their cart, warn them before updating it
            if(
                props.cartHasItems && 
                !window.confirm(`Are you sure you want to replace the items in your cart with the items from ${props.name}?`)
            ) {
                return;
            }

            props.updateCart(e);
        }}
    >
        {props.name}
    </button>;