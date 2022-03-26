import { faArrowsSpin, faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
   

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const chooseOne = () =>{
        if(cart.length === 0){
            alert("You didn't added any items")
        }
        else{
            const randomItem = cart[Math.floor(Math.random() * cart.length)];
            const randomArr = [randomItem];
            setCart(randomArr);
        }
    };
    const reset = () => {
        const reset = [];
        setCart(reset);
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
                <button onClick={chooseOne} className='cart-btn'>Choose 1 for me <FontAwesomeIcon icon={faArrowsSpin}></FontAwesomeIcon></button>
                <button onClick={reset} className='cart-btn2'>Choose Again <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Shop;