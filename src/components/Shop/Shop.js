import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const handleAddToCart = props;
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
   

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3 className='cart'>Selected Items</h3>
                <div>
                    {
                        cart.map(product => <h4 key={product.id}
                        ><img width= "20px" src={product.img} alt="" />   {product.name}</h4> )
                    }
                </div>
                <button className='cart-btn'>Choose 1 for me</button>
                <button className='cart-btn2'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;