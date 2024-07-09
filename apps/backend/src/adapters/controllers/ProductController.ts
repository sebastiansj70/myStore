import { Request, Response } from "express";
import { Product } from "../../domain/entities/Product";
import GetAllProducts from "../../application/usecases/GetAllProducts";
import SaveProduct from "../../application/usecases/SaveProduct";
import GetProduct from "../../application/usecases/GetProduct";
import DeleteProduct from "../../application/usecases/DeleteProduct";
import UpdateProduct from "../../application/usecases/UpdateProdcut";


export const getAllProdcuts = async (req: Request, res: Response) => {
    const products = new GetAllProducts()
    const result = await products.execute()
    res.json(result)
}

export const addProduct = async (req: Request, res: Response) => {
    const { id, name, price } = req.body;
    const product = new Product(id, name, price)
    const saveProduct = new SaveProduct()
    await saveProduct.execute(product)
    res.status(200).send('Product successfully added')
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.body
    const product = new GetProduct()
    const result = await product.execute(id)
    res.json(result)
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.body
    const product = new DeleteProduct()
    await product.execute(id)
    res.status(200).send('Product successfully deleted')
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id, name, price } = req.body;
    const updateProduct = new UpdateProduct()
    const product = new Product(id, name, price)
    await updateProduct.execute(product)
    res.status(200).send('Product successfully updated')
}