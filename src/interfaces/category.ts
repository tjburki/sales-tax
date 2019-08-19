import { IItem } from "./item";

export interface ICategory {
    id: number,
    name: string,
    items: IItem[],
    taxExempt: boolean
}