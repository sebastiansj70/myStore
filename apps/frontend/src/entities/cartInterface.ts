
interface Price {
 total: number,
 subtotal?: number,
}

interface Item {
 id: string,
 quantity: number,
 name: string,
 image: string,
 price: Price,
 description?: string
}

export interface CartItem {
 items: Item[],
 price: Price
}

export interface newItem {
 id: string,
 quantity: number
}