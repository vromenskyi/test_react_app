import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams<string>();

    //TODO server request /api/products/{id}
    return (
        <h1>Product #{id}</h1>
    );
}

export default ProductDetails;