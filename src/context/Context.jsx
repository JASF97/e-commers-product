import { createContext, useState, useEffect } from 'react'

export const Context = createContext()

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productsLocalStorage = localStorage.getItem("cartProducts")
            return productsLocalStorage ? JSON.parse(productsLocalStorage) : []
        } catch (error) {
            return []
        }
    })
    
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
        console.log(cartItems)
    }, [cartItems])

    const addProductToCart = (product) => {
        const inCart = cartItems.find((productsInCart) => productsInCart.id === product.id)

        if(inCart) {
            setCartItems(
                cartItems.map((productsInCart) => {
                    if(productsInCart.id === product.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productsInCart
                }) 

            )
        } else {
            setCartItems([...cartItems, { ...product, amount: 1 }])
        }
    }

    const deleteProductToCart = (product) => {
        const inCart = cartItems.find((productsInCart) => productsInCart.id === product.id)

        if(inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productsInCart) => productsInCart.id !== product.id))
        }   else {
            setCartItems(cartItems.map((productsInCart) => {
                if (productsInCart.id === product.id) {
                    return { ...inCart, amount: inCart.amount - 1 }
                } else return productsInCart
            })
         )}
    }

    return (
        <Context.Provider value={{cartItems, addProductToCart, deleteProductToCart}}>
            {children}
        </Context.Provider>
    ) 
}