import React, { useContext } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import propTypes from "prop-types";
import "./CartItem.css"
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../Context/AppContext";

function CartItem ( { data} ) {
    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, title, image, price } = data;

    const handleRemoveItem = () => {
        const itemIndex = cartItems.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
            const updatedItems = [...cartItems];
            updatedItems.splice(itemIndex, 1);
            setCartItems(updatedItems);
        }
    }

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
                onClick={ handleRemoveItem }
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