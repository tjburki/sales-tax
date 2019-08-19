import * as React from 'react';
import classes from './icon.module.scss';

interface IIconProps {
    type: string
}

export const Icon: React.FC<IIconProps> = (props: IIconProps) =>
    <i className={`fa fa-${props.type} ${classes.icon}`}></i>;