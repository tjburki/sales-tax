//Packages
import * as React from 'react';

//Styles
import classes from './button-row.module.scss';

export const ButtonRow: React.FC = ({children}) =>
    <div className={classes.container}>
        {children}
    </div>;