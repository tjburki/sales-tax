//Packages
import * as React from 'react';

//Interfaces
interface IIconProps {
    type: string
}

export const Icon: React.FC<IIconProps> = (props: IIconProps) =>
    <i className={`fa fa-${props.type} mr-1`}></i>;