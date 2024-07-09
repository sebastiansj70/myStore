import { Request, Response } from "express";
import AddtoCart from "../../application/usecases/cart/AddtoCart";


export const addtoCart = async (req: Request, res: Response) => {
    const { id, quantity } = req.body;
    const itemCard = new AddtoCart()
    const data = await itemCard.execute({ id, quantity })
    res.json(data)
}
