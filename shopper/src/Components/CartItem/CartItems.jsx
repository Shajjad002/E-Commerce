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
                {/* <p>Total</p> */}
                <p>Remove</p>
                <hr />
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0)
                    {
                        return <div>
                            <div className="cartitems-format">
                                <img className='carticon-product-icon' src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItems[e.id]} </button>
                                <p>{e.new_price*cartItems[e.id]}</p>
                                <img src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}} />
                            </div> 
                        </div>
                    }
                })}  

            </div>
        </div>
    )
}

export default CartItems