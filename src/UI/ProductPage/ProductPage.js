import React from 'react';
import ProductSummary from "../../components/ProductSummary/ProductSummary";
import Products from "../../components/Products/Products";
import ProductCategory from "../../components/Products/ProductCategory";

const ProductPage = () => {
    return (
        <div>
            <ProductSummary/>
            <ProductCategory/>
            <Products/>
        </div>
    );
};

export default ProductPage;