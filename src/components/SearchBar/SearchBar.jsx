import React, { useState, useContext }from "react";
import { FaSearchDollar } from "react-icons/fa";

import './SearchBar.css'
import fetchProducts from "../../API/fetchProducts";
import AppContext from "../../Context/AppContext";

function SearchBar() {

    const {setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        const products = await fetchProducts(searchValue);

        setProducts(products)
        setLoading(false)
        setSearchValue('')
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
                <input 
                type="search" 
                value={searchValue}
                placeholder="Buscar produtos" 
                className="search__input" 
                onChange={ ( {target } ) => setSearchValue(target.value) }
                required
                />
                <button type="submit" className="search__button">
                    <FaSearchDollar />
                </button>    
            </form>
    )
}

export  default SearchBar