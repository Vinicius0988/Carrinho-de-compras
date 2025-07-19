import React, { useContext } from "react";

import "./Cart.css"
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";
//import formatCurrency from "../../utils/formatCurrency";

function Cart() {
    const {cartItems} = useContext(AppContext)

    return (
        <section className="Cart">
            <div className="Cart-itens">
                {Array.isArray(cartItems) && cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} data={cartItem} />))}
            </div>

            <div className="cart-resume"> resumo do carrinho</div>
        </section>
    )
}

export default Cart;