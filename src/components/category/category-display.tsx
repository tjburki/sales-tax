//Packages
import * as React from 'react';

//Components
import ItemOrderDisplayContainer from '../item/item-order-display-container';
import { Section } from '../layout/section';

//Styles
import classes from './category-display.module.scss';

//Interfaces
import { ICategory } from '../../interfaces/category';
import { IItem } from '../../interfaces/item';

interface ICategoryDisplayProps extends ICategory { }

export const CategoryDisplay: React.FC<ICategoryDisplayProps> = (props: ICategoryDisplayProps) =>
    <div className={classes.container}>
        <Section
            title={props.name}
        >
            {
                props.items.map((item: IItem) => 
                    <ItemOrderDisplayContainer
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imported={item.imported}
                        taxExempt={item.taxExempt}
                    />
                )
            }
        </Section>
    </div>;