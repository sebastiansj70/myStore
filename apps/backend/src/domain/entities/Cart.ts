
export interface Price {
    total: number;
    subtotal?: number;
}

export interface CartItem {
    id: string;
    quantity: number;
    price?: Price;
}

export class Cart {
    constructor(
        public items: CartItem[],
        public price: Price
    ) { }
}