//Packages
import * as React from 'react';

//Components
import { Icon } from './icon';

//Interfaces
import classes from './section.module.scss';

interface ISectionProps {
    title: string,
    subtitle?: string,
    icon?: string,
    children: any
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) =>
    <div>
        <div className={classes.header}>
            <div>
                {props.icon && <Icon type='shopping-cart' /> }
                {props.title}
            </div>
            {
                props.subtitle &&
                <div className={classes.subtitle}>
                    {props.subtitle}
                </div>
            }
        </div>
        <div className={classes.body}>
            {props.children}
        </div>
    </div>;