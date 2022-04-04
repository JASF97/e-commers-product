import { useState } from "react";
import data from '../data'

const initialState = {
    cart: [],
}

const InitialState = () => {

    const { products } = data

    const [cartItems, setCartItems] = useState(initialState)

    const onAddProducts = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if(exist) {
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x 
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, qty: 1}])
        }
    }
    return {
        onAddProducts
    }
}

export default InitialState;