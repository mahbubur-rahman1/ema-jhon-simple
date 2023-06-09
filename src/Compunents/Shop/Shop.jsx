import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, []) 
    useEffect(() => {
        const storedcart = getShoppingCart()
        console.log(storedcart)
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]aA\B\6
        setCart(newCart)
    }
    addToDb(products)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>  <Product
                    ke={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;