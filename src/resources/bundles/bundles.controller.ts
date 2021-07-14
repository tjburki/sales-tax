//Shared
import * as constants from '../../shared/constants';

//Interfaces
import { IBundle } from "../../interfaces/bundle";

export const getBundles = async(): IBundle[] =>
    constants.bundles;