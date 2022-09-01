import React from 'react'
import './filterBy.css'

const FilterBy = ({ products }) => {


    const categories = products.map(p => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    console.log(categories);
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select>
                <option value="/">All Jackets</option>
                <option value="/">2016</option>
                <option value="/">jacket</option>
                <option value="/">Jackets</option>
                <option value="/">layers</option>
                <option value="/">Obermeyer</option>
                <option value="/">Roxy</option>
                <option value="/">womens</option>
            </select>
        </div>
    )
}

export default FilterBy