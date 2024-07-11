
export interface Price {
    total: number,
    subtotal?: number,
}

export interface Product {
    id: string,
    quantity: number,
    name: string,
    image: string,
    price: Price,
    description?: string
}