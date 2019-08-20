//Packages
import * as React from 'react';
import { Percent } from '../layout/percent';
import * as constants from '../../constants';
import classes from './key.module.scss';

interface IKeyProps { }

export const Key: React.FC<IKeyProps> = (props: IKeyProps) =>
    <div className={classes.container}>
        <div>
            * Tax Exempt items are excluded from <Percent value={constants.salesTaxPercent} /> sales tax
        </div>
        <div>
            ** Imported items include a mandatory <Percent value={constants.importDutyTaxPercent} /> duty tax
        </div>
    </div>;