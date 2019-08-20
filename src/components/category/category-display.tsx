//Packages
import * as React from 'react';

//Components
import { ItemDisplay } from '../item/item-display';

//Styles
import classes from './category-display.module.scss';

//Interfaces
import { ICategory } from '../../interfaces/category';
import { Section } from '../layout/section';
import ItemDisplayContainer from '../item/item-display-container';

interface ICategoryDisplayProps extends ICategory {
    
}

export const CategoryDisplay: React.FC<ICategoryDisplayProps> = (props: ICategoryDisplayProps) =>
    <div className={classes.container}>
        <Section
            title={props.name}
            subtitle={props.taxExempt ? '(Tax Exempt*)' : ''}
        >
            {
                props.items && props.items.map(item => <ItemDisplayContainer {...item} />)
            }
        </Section>
    </div>;