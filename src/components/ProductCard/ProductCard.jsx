import React from "react";
import propTypes from "prop-types"
import { BiCartAdd } from "react-icons/bi";
import './ProductCard.css'
import formatCurrency  from "../../utils/formatCurrency"

function ProductCard({ data }) {

    const { title, image, price } = data;

    return(
        <section className="product-card">
            
        <img 
        src={image} 
        alt="product" 
        className="card__image" 
        />

        <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            <h2 className="card__title">{title}</h2>
        </div>

        <button type="button" className="button__add-cart">
            <BiCartAdd />
        </button>
        </section>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;