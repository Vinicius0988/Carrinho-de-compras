import React from "react";

import './ProductCard.css'
function ProductCard() {
    return(
        <section className="product-card">
            
        <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="product" className="card__image" />

        <div className="card__infos">
            <h2 className="card__price">R$ 200.20</h2>
            <h2 className="card__title">manual do dev</h2>
        </div>

        <button type="button" className="button__add-cart">
            kd o icon?
        </button>
        </section>
    )
}

export default ProductCard;