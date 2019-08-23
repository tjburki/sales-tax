//Packages
import * as React from 'react';

//Interfaces
interface IErrorDisplayProps {
    text: string
}

export const ErrorDisplay: React.FC<IErrorDisplayProps> = (props: IErrorDisplayProps) =>
    <div className='text-danger py-5'>{props.text}</div>;