import React from "react";
import { FaSearchDollar } from "react-icons/fa";
function SearchBar() {
    return (
        <form>
                <input 
                type="search" 
                placeholder="Buscar produtos" 
                className="search__input" 
                required
                />

                <button type="submit" className="search__button">
                    <FaSearchDollar />
                </button>    
            </form>
    )
}

export  default SearchBar