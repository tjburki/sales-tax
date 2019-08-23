//Packages
import * as React from 'react';

//Components
import { Icon } from './icon';

//Interfaces
interface ISpinnerProps { }

export const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps) =>
    <div style={{padding: 10, fontSize: '4rem', textAlign: 'center'}}><Icon type='spinner' pulse /></div>;