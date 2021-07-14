//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { ICategory } from "../../interfaces/category";

export const getCategories = async(): Promise<ICategory[]> =>
    await fetch(constants.categoriesUrl)
        .then((response: Response) => response.json())
        .then((json: ICategory[]) => json);