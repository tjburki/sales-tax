import * as React from 'react';
import { Link } from 'react-router-dom';

interface ICheckoutProps { }

export const Checkout: React.FC<ICheckoutProps> = (props: ICheckoutProps) =>
    <div>
        <div>
            Check this out
        </div>
        <div>
            <Link to='/'>
                Continue Shopping
            </Link>
        </div>
    </div>;