import React, { useContext } from 'react'
import MyContext from '../MyContext'

const Cart = () => {
    const { cart } = useContext(MyContext);

    return (
        <div>
            {/* Cart of our products */}
            {cart.length === 0 && <h2>nothing in cart yet</h2>}
            {cart.map(item => <div>Title:{item.title}, Amount:{item.amount}   </div>)}
        </div>
    )
}

export default Cart