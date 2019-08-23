//Packages
import * as React from 'react';

//Components
import { CategoryDisplay } from '../category/category-display';
import { Spinner } from '../layout/spinner';
import { ErrorDisplay } from '../layout/error-display';

//Interfaces
import { ICategory } from '../../interfaces/category';
import { IItem } from '../../interfaces/item';
import { IAction } from '../../interfaces/store';

export interface ICatalogueProps  {
    categories: ICategory[],
    items: IItem[],
    isLoading: boolean,
    error: string,
    getCategories: () => IAction,
    getItems: () => IAction
} 

export class Catalogue extends React.Component<ICatalogueProps> {
    componentDidMount() {
        //Just load all category and item data here
        //The categories data includes the item data, but we'll
        //use them separately and this is a good place to get both
        this.props.getCategories();
        this.props.getItems();
    }

    render() {
        const { 
            categories,     
            items,
            isLoading,
            error = 'Items could not be retrieved.', 
        } = this.props;

        return (
            <React.Fragment>
                {
                    categories && categories.length && items && items.length
                        ?   categories.map((category: ICategory) => 
                                <CategoryDisplay
                                    key={category.id}
                                    id={category.id}
                                    name={category.name}
                                    taxExempt={category.taxExempt}
                                    items={category.items}
                                />
                            )
                        :   isLoading
                            ? <Spinner />
                            : <ErrorDisplay text={error} />
                }
            </React.Fragment>
        );
    }
}