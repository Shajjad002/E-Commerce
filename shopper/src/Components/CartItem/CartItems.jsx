import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";


function CartItems() {
    const {all_product,cartItems,addToCart,removeFromCart}=useContext(ShopContext);
    return (
        <div className='cartItems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <hr />
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0)
                    {
                        return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img className='carticon-product-icon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItems[e.id]} </button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}} />
                            </div> 
                        </div>
                    }
                    return null;

                })}  
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Fee</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${0}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems