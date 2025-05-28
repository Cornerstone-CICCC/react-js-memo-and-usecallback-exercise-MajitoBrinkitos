import React from "react";

const GetProductsButton = ({ fetchProducts }: { fetchProducts: () => void }) => {
    console.log("Rendered Button Component");

    return(
        <button onClick={fetchProducts}>
            Fetch Products
        </button>
    )
};

export default React.memo(GetProductsButton)