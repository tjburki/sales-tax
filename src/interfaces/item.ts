export interface IItem {
    id: number,
    name: string,
    price: number,
    imported: boolean
}

export interface ICartItem {
    id: number,
    quantity: number
}