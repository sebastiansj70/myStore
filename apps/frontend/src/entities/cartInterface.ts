import { Item, Price } from "./productInterface"


export interface CartItem {
 items: Item[],
 price: Price
}

export interface newItem {
 id: string,
 quantity: number
}