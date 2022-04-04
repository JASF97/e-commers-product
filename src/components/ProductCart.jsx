import React, { useContext } from 'react'
import { Context } from '../context/Context'
import sum from '../images/icon-plus.svg'
import res from '../images/icon-minus.svg'
import '../styles/ProductCart.css'

const ProductCart = ({ item }) => {

    const { addProductToCart, deleteProductToCart } = useContext( Context )
 
    return (
        <div key={item.id} className="productCart">
            <div className="productCart-name">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
            </div>
			<div className="productCart-count"> 
                <img className="count-res" onClick={() => deleteProductToCart(item)} src={res} alt="close" />
                {item.amount}
                <img onClick={() => addProductToCart(item)} src={sum} alt="plus" />
            </div>
            <div className="productCart-total">
                <p className="productCart-total-item">Total: ${item.amount * item.price}</p>
            </div>
		</div>
    );
}

export default ProductCart