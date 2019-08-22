//Packages
import * as React from 'react';

//Components
import { CategoryDisplay } from '../category/category-display';

//Interfaces
import { ICategory } from '../../interfaces/category';

export interface ICatalogueProps {
    categories: ICategory[]
}

export const Catalogue: React.FC<ICatalogueProps> = (props: ICatalogueProps) =>
    <React.Fragment>
        {
            props.categories.map(category => 
                <CategoryDisplay
                    id={category.id}
                    name={category.name}
                    taxExempt={category.taxExempt}
                    items={category.items}
                />
            )
        }
    </React.Fragment>;