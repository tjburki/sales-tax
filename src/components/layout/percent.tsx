//Packages
import * as React from 'react';

//Interfaces
interface IPercentProps {
    value: number
}

export const Percent: React.FC<IPercentProps> = (props: IPercentProps) =>
    <React.Fragment>{props.value}%</React.Fragment>;