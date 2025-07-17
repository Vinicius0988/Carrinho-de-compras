import React from "react";
import { FaCircleXmark } from "react-icons/fa6";
import "./CartItem.css"

function CartItem () {
    return (
        <section className="Cart-item">
            <img 
            src="" 
            alt="imagem do produto" 
            className="Cart-item-image" 
            />

            <div className="cart-item-content">
                <h3 className="Cart-item-title">titulo do produto</h3>
                <h3 className="Cart-item-price">300R$</h3>

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