import { IItem } from "./item";

export interface ICart {
    items: ICartItem[]
}

export interface ICartBaseItem {
    id: number,
    quantity: number
}

export interface ICartClearer {
    clear: () => void
}

export interface ICartItem extends IItem, ICartBaseItem {}