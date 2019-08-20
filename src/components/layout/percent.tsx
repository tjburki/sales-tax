import * as React from 'react';

interface IPercentProps {
    value: number
}

export const Percent: React.FC<IPercentProps> = (props: IPercentProps) =>
    <React.Fragment>{props.value}%</React.Fragment>;