import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "@/entities/productInterface";

const HomePage = () => {
    const [products, setProducts] =useState<Product[]>([]);

    useEffect(() => {
        const products = useProducts();
        setProducts(products)
    }, [])


    return (
        <div className="productListContainer">
            {products ? (
                <div className="productList">
                    {products.map(product => (
                        <div key={product.id} className="productCard">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Lista de productos vacía</p>
            )}
        </div>
    );
};

export default HomePage;