//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { ICategory } from "../../interfaces/category";

export const getCategories = async(): ICategory[] =>
    constants.categories;