import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalPriceShipping = 0 ;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalPriceShipping = totalPriceShipping + product.shipping
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalPriceShipping
    return (
        <div className='cart'>
            <h4>Order Summar</h4>
                <p>Select Items: {cart.length}</p>
                <p>totalPrice Price: {totalPrice}</p>
                <p>totalPrice Shipping: {totalPriceShipping}</p>
                <p>Tax: ${tax}</p>
                <h6>Grand totalPrice: {grandTotal.toFixed(3)}</h6>
        </div>
    );
};

export default Cart;