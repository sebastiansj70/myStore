export interface CartItem {
    id: string;
    quantity: number;
}

export interface Price {
    total: number;
}


export class Cart {
    constructor(
        public items: CartItem[],
        public price: Price
    ) { }
}