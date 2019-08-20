import * as React from 'react';
import { formatCurrency } from '../../helpers';

interface ICurrencyProps {
    value: number
}

export const Currency: React.FC<ICurrencyProps> = (props: ICurrencyProps) =>
    <React.Fragment>{formatCurrency(props.value)}</React.Fragment>;