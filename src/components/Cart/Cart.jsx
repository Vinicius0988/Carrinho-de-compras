import React from "react";
import "./Cart.css"
import CartItem from "../CartItem/CartItem";

function Cart () {
    return (
        <section className="Cart">

            <div className="Cart-itens">
                <CartItem />
            </div>

            <div className="cart-resume"> resumo do carrinho</div>
        </section>
    )
}

export default Cart;