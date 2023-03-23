import React from 'react';
import {Link} from "react-router-dom";

const ProductList = () => {
    
    return (
        <>
        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
        <Link to="/products/5">Product 5</Link>
        </>
    );
}

export default ProductList;