import React, { useState, useEffect } from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Cart from './Cart';
import NotFound from './NotFound';
import Loading from '../components/Loading';
import MyContext from '../MyContext';

const Routing = () => {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([])
    const [productsData, setProductData] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const getApiProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const dataFromResponse = await response.json()
            setProductData(dataFromResponse);
            setLoading(false);
            // console.log(dataFromResponse);
        } catch (e) {
            console.log("Error getting" + e);
        }
    }
    useEffect(() => {
        // console.log(productsData)
    }, [productsData]);

    useEffect(() => {
        getApiProducts();
    }, [])

    useEffect(() => { setLoading(false) }, [productsData]);

    const addProductToCart = (product) => {
        const productInCart = cart.findIndex(p => p.id === product.id);
        if (productInCart === -1) {
            const newProductToCart = { ...product, amount: 1 }
            setCart(prev => [newProductToCart, prev])
        } else {
            const newCart = [...cart];
            newCart[productInCart].amount++;
            setCart(newCart);
        }
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const filterProductsByCategory = (category) => {
        if (category === '/') {
            setFilteredProducts(productsData)
            return
        }
        const filteredItems = productsData.filter(p => p.category === category);
        setFilteredProducts(filteredItems);
    }
    const [isAdmin] = useState(false);
    return (
        <MyContext.Provider value={{ productsData, filterProductsByCategory, filteredProducts, cart }}  >

            < BrowserRouter>
                {loading && <Loading />}

                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/cart" >Cart</Link>
                {isAdmin && <Link to="/admin" >Admin</Link>}
                <Routes>
                    <Route path='/' element={<App addProductToCart={addProductToCart} />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/admin' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </ BrowserRouter>
        </MyContext.Provider>

    )
}

export default Routing