//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IBundle } from "../../interfaces/bundle";

export const getBundles = async(): Promise<IBundle[]> =>
    await fetch(constants.categoriesUrl)
        .then((response: Response) => response.json())
        .then((json: IBundle[]) => json);