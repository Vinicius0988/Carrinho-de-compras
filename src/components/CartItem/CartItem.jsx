import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import propTypes from "prop-types";
import "./CartItem.css"
import formatCurrency from "../../utils/formatCurrency";

function CartItem ( { data} ) {

    const { title, image, price } = data;

    return (
        <section className="Cart-item">
            <img 
            src={image}
            alt="imagem do produto" 
            className="Cart-item-image" 
            />

            <div className="cart-item-content">
                <h3 className="Cart-item-title">{title}</h3>
                <h3 className="Cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button 
                type="button"
                className="Button__remove-item"
                >
                <FaCircleXmark />
                </button>
            </div>
            </section>
    )
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;