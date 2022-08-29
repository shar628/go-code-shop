import React from 'react'
import FilterBy from './FilterBy'
import './header.css'
import SortBy from './SortBy'

const Header = () => {
    return (
        <div className="product-filter">
            <h1>Jackets</h1>
            <div className="sort" >
                <FilterBy />
                <SortBy />
            </div>

        </div>
    )
}

export default Header