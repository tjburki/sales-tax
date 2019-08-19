import * as React from 'react';
import { categories } from '../../data';
import { CategoryDisplay } from '../category/category-display';
import classes from './catalogue.module.scss';

interface ICatalogueProps {

}

export const Catalogue: React.FC<ICatalogueProps> = (props: ICatalogueProps) =>
    <div>
        {
            categories.map(category => <CategoryDisplay {...category} />)
        }
    </div>;