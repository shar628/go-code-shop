import React from 'react'
import FilterBy from './FilterBy'
import './header.css'
import SortBy from './SortBy'
// import { useContext } from 'react'
// import MyContext from '../MyContext'

const Header = ({ products }) => {

    // const { productsData } = useContext(MyContext);


    return (
        <div className="product-filter">
            <h1>Welcome to our new store </h1>
            <div className="sort" >
                <FilterBy products={products} />
                <SortBy />
            </div>

        </div>
    )
}

export default Header