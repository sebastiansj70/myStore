import { Product, Price } from "./productInterface"


export interface CartItem {
    items: Product[],
    price: Price
}

export interface newItem {
    id: string,
    quantity: number
}