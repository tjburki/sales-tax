//Packages
import * as React from 'react';

//Components
import { Link } from 'react-router-dom';
import { Icon } from '../components/layout/icon';

//Styles
import classes from './confirmation.module.scss';

//Helpers
import * as helpers from '../shared/helpers';

//Interfaces
interface IConfirmationProps { }

export const Confirmation: React.FC<IConfirmationProps> = (props: IConfirmationProps) =>
    <div className={classes.container}>
        <div className={classes.thankyou}>
            Thank you for your order!
        </div>
        <div className='p-3'>
            Order #{helpers.createFakeOrderNumber()}
        </div>
        <Link to='/'>
            <button className='btn btn-outline-dark'><Icon type='shopping-cart' />
                Continue Shopping
            </button>
        </Link>
    </div>;