import { Request, Response } from "express";
import AddtoCart from "../../application/usecases/cart/AddtoCart";
import GetCart from "../../application/usecases/cart/GetCart";
import DeleteCart from "../../application/usecases/cart/DeleteCart";


export const addtoCart = async (req: Request, res: Response) => {
    const { id, quantity } = req.body;
    const itemCard = new AddtoCart()
    const data = await itemCard.execute({ id, quantity })
    res.json(data)
}
export const getCart = async (req: Request, res: Response) => {
    const card = new GetCart()
    const data = await card.execute()
    res.json(data)
}

export const deleteCart = async (req: Request, res: Response) => {
    const card = new DeleteCart()
    const data = await card.execute()
    res.json(data)
}