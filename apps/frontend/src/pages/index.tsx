import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
    const products = useProducts();

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