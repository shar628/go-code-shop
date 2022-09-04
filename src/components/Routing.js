import React, { useState } from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Cart from './Cart';
import NotFound from './NotFound';

const Routing = () => {
    const [isAdmin] = useState(false);
    return (
        < BrowserRouter>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/cart" >Cart</Link>
            {isAdmin && <Link to="/admin" >Admin</Link>}
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

        </ BrowserRouter>
    )
}

export default Routing