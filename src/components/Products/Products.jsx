import React, { useState, useEffect} from "react";

import './Products.css'
import fetchProducts from "../../API/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {   
        fetchProducts('electronics').then((response) => {
            setProducts(response)
        })
    },[])

    console.log(products)
    return(
        <section className="products container">
        <ProductCard />
        </section>
    )
}

export default Products