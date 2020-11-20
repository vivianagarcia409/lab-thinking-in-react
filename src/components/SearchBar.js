import React, { useState } from 'react';
import { data } from '../data.json'
import ProductRow from './ProductRow'

const SearchBar = () => {


    let [allProducts, setAllProducts] = useState({ data });
    let [showProducts, setShowProducts] = useState({ data });

    const Searches = (search) => {
        return showProducts.map((eachProducts) => {
            return <ProductRow {...eachProducts} />
        });


        setAllProducts([newSearch, ...showProducts]);
    }

    const searchProducts = (event) => {
        let filteredProducts = allProducts.filter((eachProducts) => {
            return eachProducts.data.name
                .toUpperCase()
                .includes(event.target.value.toUpperCase());
        });
        setShowProducts(filteredProducts);
    }

    return (
        <form>
            <h3>Search</h3>

            <input onChange={searchProducts} type="text" placeholder="Search Here" />
        </form>
    )

}

export default SearchBar;