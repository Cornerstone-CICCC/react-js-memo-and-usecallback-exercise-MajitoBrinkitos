import { useState, useCallback } from "react";
import GetProductsButton from "./GetProductsButton";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <GetProductsButton fetchProducts={fetchProducts} />

            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;