//Packages
import * as React from 'react';

//Constants
import { formatCurrency } from '../../helpers';

//Interfaces
interface ICurrencyProps {
    value: number
}

export const Currency: React.FC<ICurrencyProps> = (props: ICurrencyProps) =>
    <React.Fragment>{formatCurrency(props.value)}</React.Fragment>;