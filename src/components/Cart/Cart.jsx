import React, { useContext } from "react";

import "./Cart.css"
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
    const {cartItems, isCartVisible} = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

    return (
        <section className={`Cart ${isCartVisible ? "Cart-active" : ""}`}>
            <div className="Cart-items">
                {Array.isArray(cartItems) && cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} data={cartItem} />))}
            </div>

            <div className="Cart-resume"> {formatCurrency(totalPrice, "BRL")}</div>
        </section>
    )
}

export default Cart;