//Packages
import * as React from 'react';

//Components
import { Icon } from './icon';

//Interfaces
interface ISpinnerProps { }

export const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps) =>
    <Icon type='spinner' pulse />;