import React, {useContext} from 'react'
import { Context } from '../context/Context'
import Carousel from '../components/Carousel'
import '../styles/ProductItem.css'
import   data   from '../data'

import iconCard from '../images/shopping_cart.svg'

const ProductItem = () => {
    const { products } = data
    const { addProductToCart } = useContext(Context)
 
    return (
        <section className="container">
            {products.map((product, i) => (
                <div className="container-product-items" key={i}>
                    <div className="container-left">
                        <img src={product.image} alt="" />
                        {/*<Carousel key={i} product={product} />*/}
                    </div>
                    <div className="container-right">
                        <h3>{product.name}</h3>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut at consequuntur, officia laboriosam facilis nisi. Dignissimos, maxime maiores labore minus iste illo repellat aperiam ratione asperiores tempora quae ad odit.</p>
                        <span>${product.price}</span>
                        <div className="product-to-cart">
                            

                            <button className="button-add" onClick={() => addProductToCart(product)}>
                                <img src={iconCard} alt="" />
                                Add to Cart    
                            </button>
                        </div>
                       
                    </div>
                </div>  
            ))}
            
        </section>
    )
}

export default ProductItem