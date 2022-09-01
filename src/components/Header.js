import React from 'react'
import FilterBy from './FilterBy'
import './header.css'
import SortBy from './SortBy'

const Header = ({ products }) => {
    return (
        <div className="product-filter">
            <h1>Jackets</h1>
            <h2>Welcome to our new store     </h2>
            <div className="sort" >
                <FilterBy products={products} />
                <SortBy />
            </div>

        </div>
    )
}

export default Header