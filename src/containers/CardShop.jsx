import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import ProductCart from '../components/ProductCart';
import shopping from '../images/icon-cart.svg'
import '../styles/CardShop.css'

const CardShop = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)

    const { cartItems } = useContext(Context)

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems])

    const total = cartItems.reduce(
        (previous, current) => previous + current.amount * current.price, 0)

    return (
        <div className="container-shop">
            <div className="container-shop--icon">
                <img src={shopping} alt="Shopping logo" onClick={() => {setCartOpen(!cartOpen)}} /> 
            </div>
            {!cartOpen && (<div className="container-shop--counter">{productsLength}</div>)}

            {cartItems && cartOpen && (
                <div className="cart-shop">
                    <h2>Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className="cart-shop-p">Cart is empty</p>
                    ) : (
                        <div>
                            {cartItems.map((item, i) => (
                                <ProductCart key={i} item={item} />
                            ))}
                        </div>
                    )}
                    <div className="cart-shop--total">
                        <h3>Total: ${total}</h3>
                    </div>
                </div>                     
        )}
        </div>
    )
       
    
}

export default CardShop
