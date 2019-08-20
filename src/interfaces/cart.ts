import { IItem } from "./item";

export interface ICart {
    items: ICartItem[]
}

export interface ICartBaseItem {
    id: number,
    quantity: number
}

export interface ICartItem extends IItem, ICartBaseItem { }