//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IItem } from "../../interfaces/item";

export const getCategories = async(): Promise<IItem[]> =>
    await fetch(constants.categoriesUrl)
        .then((response: Response) => response.json())
        .then((json: IItem[]) => json);